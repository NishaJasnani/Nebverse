/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import Modal from '../../../components/bootstrap/Modal';
import Button from '../../../components/bootstrap/Button';
import Input from '../../../components/bootstrap/forms/Input';
import ArticleCategoryModal from './ArticleCategoryModal'; // <-- import

interface AddArticleModalProps {
  show: boolean;
  onClose: () => void;
  categories: string[];
  onAddCategory: (cat: string) => void;
  onAddArticle?: (article: { id?: string; heading: string; category: string; to: string }) => void;
  editingArticle?: { id?: string; heading: string; category: string; to: string } | null;
}

const AddArticleModal = ({
  show,
  onClose,
  categories,
  onAddCategory, // Receive this prop
  onAddArticle, // Receive this prop
  editingArticle, // Receive this prop
}: AddArticleModalProps) => {
  const [heading, setHeading] = useState('');
  const [category, setCategory] = useState(categories[0] || '');
  const [to, setTo] = useState('');
  const [forWhom, setForWhom] = useState<'employees' | 'clients'>('employees');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [articles, setArticles] = useState<{ id?: string; heading: string; category: string; to: string }[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

  // Prefill form when editingArticle changes
  useEffect(() => {
    if (editingArticle) {
      setHeading(editingArticle.heading);
      setCategory(editingArticle.category);
      setTo(editingArticle.to);
      setForWhom(editingArticle.to === 'employee' ? 'employees' : 'clients');
      // Optionally set description and file if you support editing them
    } else {
      setHeading('');
      setCategory(categories[0] || '');
      setTo('');
      setDescription('');
      setFile(null);
      setForWhom('employees');
    }
  }, [editingArticle, categories, show]);

  const handleAddCategory = (newCategory: string) => {
    onAddCategory(newCategory);
    setCategory(newCategory); 
  };

  const handleDeleteCategory = (categoryToDelete: string) => {
    // Implement the logic to delete a category
    console.log(`Delete category: ${categoryToDelete}`);
  };

  const handleAddArticle = (article: { id?: string; heading: string; category: string; to: string }) => {
    if (article.id) {
      // Edit mode: update existing article
      setArticles(prev =>
        prev.map(a => (a.id === article.id ? { ...a, ...article } : a))
      );
    } else {
      // Add mode: add new article
      setArticles(prev => [
        ...prev,
        { ...article, id: Date.now().toString() }, // or use uuid
      ]);
    }
    setShowAddModal(false);
  };

  return (
    <Modal isOpen={show} setIsOpen={onClose} size="lg" isStaticBackdrop={true}>
      <div className="modal-header">
        <h5 className="modal-title">Article Details</h5>
       </div>
      <div className="modal-body">
        <div className="mb-3">
          <div>
            <label className="me-3">
              <input
                type="radio"
                checked={forWhom === 'employees'}
                onChange={() => setForWhom('employees')}
                className="me-1"
              />
              For Employees
            </label>
            <label>
              <input
                type="radio"
                checked={forWhom === 'clients'}
                onChange={() => setForWhom('clients')}
                className="me-1"
              />
              For Clients
            </label>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Article Heading <span className="text-danger">*</span></label>
            <Input
              value={heading}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHeading(e.target.value)}
              placeholder="Article Heading"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Article Category <span className="text-danger">*</span></label>
            <div className="input-group">
              <select className="form-select" value={category} onChange={e => setCategory(e.target.value)}>
                <option value="">--</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <Button
                color="light"
                className="input-group-text"
                type="button"
                onClick={() => setShowCategoryModal(true)}
              >
                Add
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          {/* Replace with your rich text editor if you have one */}
          <textarea
            className="form-control"
            rows={5}
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Description"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload File</label>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: 6,
              height: 120,
              background: '#fafbfc',
              cursor: 'pointer'
            }}
            onClick={() => document.getElementById('article-upload-input')?.click()}
          >
            <input
              id="article-upload-input"
              type="file"
              style={{ display: 'none' }}
              onChange={e => setFile(e.target.files?.[0] || null)}
            />
            <span style={{ color: '#6c757d' }}>
              {file ? file.name : 'Choose a file'}
            </span>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <Button color="secondary" className="me-2" onClick={onClose}>Cancel</Button>
          <Button
            color="primary"
            onClick={() => {
              if (!heading.trim() || !category.trim() || !forWhom) {
                alert('Please fill all required fields.');
                return;
              }
              if (onAddArticle) {
                onAddArticle({
                  ...(editingArticle?.id ? { id: editingArticle.id } : {}),
                  heading,
                  category,
                  to: forWhom === 'employees' ? 'employee' : 'client',
                });
              }
              // Clear the form fields
              setHeading('');
              setCategory(categories[0] || '');
              setDescription('');
              setFile(null);
              setForWhom('employees');
              onClose();
            }}
          >
            Save
          </Button>
        </div>
      </div>
      <ArticleCategoryModal
        show={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        onAddCategory={handleAddCategory}
        onDeleteCategory={handleDeleteCategory}
        categories={categories}
      />
    </Modal>
  );
};

export default AddArticleModal;