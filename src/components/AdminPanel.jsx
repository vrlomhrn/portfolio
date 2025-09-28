import { useState } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { Card, Button } from './UI';
import { Edit, Save, Plus, Trash2, X } from 'lucide-react';

export const AdminPanel = () => {
  const { data, updateSection, addProject, updateProject, deleteProject } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);
  const [editingSection, setEditingSection] = useState(null);
  const [editingProject, setEditingProject] = useState(null);
  const [formData, setFormData] = useState({});

  const handleSectionEdit = (section) => {
    setEditingSection(section);
    setFormData(data[section]);
  };

  const handleProjectEdit = (project) => {
    setEditingProject(project);
    setFormData(project);
  };

  const handleSave = () => {
    if (editingSection) {
      updateSection(editingSection, formData);
      setEditingSection(null);
    } else if (editingProject) {
      updateProject(editingProject.id, formData);
      setEditingProject(null);
    }
    setFormData({});
  };

  const handleNewProject = () => {
    const newProject = {
      title: 'New Project',
      description: 'Project description',
      image: '/images/placeholder.jpg',
      technologies: [],
      liveUrl: '',
      githubUrl: '',
      featured: false
    };
    addProject(newProject);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 glass-effect p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50 border border-accent-primary/30 hover:glow"
      >
        <Edit className="w-5 h-5" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-primary">Content Management</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-secondary hover:text-primary"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {!editingSection && !editingProject ? (
          <div className="space-y-6">
            {/* Quick Edit Sections */}
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Edit Sections</h3>
              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="secondary"
                  onClick={() => handleSectionEdit('personal')}
                  className="text-left"
                >
                  Personal Info
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => handleSectionEdit('social')}
                  className="text-left"
                >
                  Social Links
                </Button>
              </div>
            </div>

            {/* Projects Management */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-primary">Projects</h3>
                <Button variant="accent" size="sm" onClick={handleNewProject}>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Project
                </Button>
              </div>
              <div className="space-y-2">
                {data.projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between p-3 glass-effect rounded-lg border border-accent-primary/20"
                  >
                    <span className="text-primary">{project.title}</span>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleProjectEdit(project)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteProject(project.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-primary">
                Editing {editingSection || editingProject?.title}
              </h3>
              <div className="flex space-x-2">
                <Button variant="accent" onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Save
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setEditingSection(null);
                    setEditingProject(null);
                    setFormData({});
                  }}
                >
                  Cancel
                </Button>
              </div>
            </div>

            {/* Dynamic Form Based on Editing Type */}
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(formData).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-secondary mb-2 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  {Array.isArray(value) ? (
                    <textarea
                      value={JSON.stringify(value, null, 2)}
                      onChange={(e) => {
                        try {
                          setFormData({
                            ...formData,
                            [key]: JSON.parse(e.target.value)
                          });
                        } catch (error) {
                          console.warn('Invalid JSON format for', key, error);
                        }
                      }}
                      className="w-full p-3 glass-effect border border-accent-primary/30 rounded-lg text-primary placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                      rows="4"
                    />
                  ) : typeof value === 'object' ? (
                    <textarea
                      value={JSON.stringify(value, null, 2)}
                      onChange={(e) => {
                        try {
                          setFormData({
                            ...formData,
                            [key]: JSON.parse(e.target.value)
                          });
                        } catch (error) {
                          console.warn('Invalid JSON format for', key, error);
                        }
                      }}
                      className="w-full p-3 glass-effect border border-accent-primary/30 rounded-lg text-primary placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                      rows="4"
                    />
                  ) : (
                    <input
                      type="text"
                      value={value || ''}
                      onChange={(e) =>
                        setFormData({ ...formData, [key]: e.target.value })
                      }
                      className="w-full p-3 glass-effect border border-accent-primary/30 rounded-lg text-primary placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};