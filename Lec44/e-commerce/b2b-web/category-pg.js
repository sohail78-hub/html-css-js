document.addEventListener('DOMContentLoaded', function() {
    // Initialize Category Tree
    initCategoryTree();
    
    // Initialize modals
    initModals();
    
    // Initialize attribute functionality
    initAttributes();
    
    // Bind event listeners
    bindEventListeners();
});

// Category Tree functionality
function initCategoryTree() {
    // Get all toggle icons
    const toggleIcons = document.querySelectorAll('.toggle-icon');
    
    // Add click event to each toggle icon
    toggleIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling
            
            // Toggle the expanded class on the icon
            this.classList.toggle('expanded');
            
            // Find the parent li
            const parentLi = this.closest('.category-tree-item');
            
            // Find the nested ul inside the parent li
            const nestedUl = parentLi.querySelector('.nested');
            
            // Toggle the active class on the nested ul
            if (nestedUl) {
                nestedUl.classList.toggle('active');
            }
        });
    });
    
    // Add click event to each category content
    const categoryContents = document.querySelectorAll('.category-tree-content');
    categoryContents.forEach(content => {
        content.addEventListener('click', function() {
            // Remove active class from all category contents
            categoryContents.forEach(c => c.classList.remove('bg-gray-100', 'dark:bg-gray-700'));
            
            // Add active class to clicked category content
            this.classList.add('bg-gray-100', 'dark:bg-gray-700');
            
            // Get category data
            const categoryId = this.querySelector('.edit-category').getAttribute('data-id');
            const categoryName = this.querySelector('.category-name').textContent;
            
            // Update category details panel
            updateCategoryDetails(categoryId, categoryName);
        });
    });
    
    // Expand the first level categories by default
    const firstLevelCategoryItems = document.querySelectorAll('.category-tree > ul > li');
    firstLevelCategoryItems.forEach(item => {
        const toggleIcon = item.querySelector('.toggle-icon');
        const nestedUl = item.querySelector('.nested');
        
        if (toggleIcon && nestedUl) {
            toggleIcon.classList.add('expanded');
            nestedUl.classList.add('active');
        }
    });
}

// Update category details panel
function updateCategoryDetails(categoryId, categoryName) {
    // This is a simulated function that would fetch category data from the backend
    // For demo purposes, we'll just update the UI with hardcoded data
    
    document.getElementById('category-id').textContent = `CAT${categoryId.padStart(3, '0')}`;
    document.getElementById('category-name').textContent = categoryName;
    document.getElementById('category-slug').textContent = categoryName.toLowerCase().replace(/\s+/g, '-');
    
    // Update parent category (simulated)
    if (categoryId === '1' || categoryId === '9' || categoryId === '12' || categoryId === '15') {
        document.getElementById('category-parent').textContent = 'None';
    } else if (categoryId >= '2' && categoryId <= '8') {
        document.getElementById('category-parent').textContent = 'Electronics';
    } else if (categoryId === '10' || categoryId === '11') {
        document.getElementById('category-parent').textContent = 'Clothing';
    } else {
        document.getElementById('category-parent').textContent = 'Home & Garden';
    }
    
    // Update category image (simulated)
    document.getElementById('category-image').src = `https://via.placeholder.com/300x150?text=${encodeURIComponent(categoryName)}`;
    
    // Update category product count (simulated)
    const productCount = categoryName === 'Electronics' ? 45 : 
                         categoryName === 'Clothing' ? 32 : 
                         categoryName === 'Home & Garden' ? 28 : 19;
    document.getElementById('category-product-count').textContent = `${productCount} products`;
    
    // Update subcategory count (simulated)
    const subcategoryCount = categoryName === 'Electronics' ? 3 : 
                             categoryName === 'Clothing' ? 2 : 
                             categoryName === 'Home & Garden' ? 2 : 0;
    document.getElementById('category-subcategory-count').textContent = `${subcategoryCount} subcategories`;
    
    // Update category attributes (simulated)
    let attributes = '';
    if (categoryName === 'Electronics') {
        attributes = `
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Brand</span>
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Model</span>
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Color</span>
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Size</span>
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Weight</span>
        `;
    } else if (categoryName === 'Clothing') {
        attributes = `
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Size</span>
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Color</span>
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Material</span>
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Style</span>
        `;
    } else if (categoryName === 'Home & Garden') {
        attributes = `
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Dimensions</span>
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Material</span>
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Color</span>
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Weight</span>
        `;
    } else {
        attributes = `
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Size</span>
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Type</span>
            <span class="inline-block px-2 py-1 text-xs rounded-md bg-gray-100 text-gray-700 dark:bg-gray-600 dark:text-gray-300 mr-1 mb-1">Ingredients</span>
        `;
    }
    document.getElementById('category-attributes').innerHTML = attributes;
    
    // Update meta title (simulated)
    document.getElementById('category-meta-title').textContent = `${categoryName} - Online Store`;
    
    // Update meta description (simulated)
    let metaDescription = '';
    if (categoryName === 'Electronics') {
        metaDescription = 'Shop the latest electronics including smartphones, laptops, audio devices and more at great prices with fast shipping.';
    } else if (categoryName === 'Clothing') {
        metaDescription = 'Discover the latest fashion trends in men\'s and women\'s clothing. Quality apparel for every style and occasion.';
    } else if (categoryName === 'Home & Garden') {
        metaDescription = 'Transform your home with our collection of furniture, decor, kitchenware and garden essentials at competitive prices.';
    } else {
        metaDescription = 'Premium beauty and personal care products for your daily routine. Natural and organic options available.';
    }
    document.getElementById('category-meta-description').textContent = metaDescription;
    
    // Update meta keywords (simulated)
    let metaKeywords = '';
    if (categoryName === 'Electronics') {
        metaKeywords = 'electronics, smartphones, laptops, headphones, tech';
    } else if (categoryName === 'Clothing') {
        metaKeywords = 'clothing, fashion, apparel, men, women, shirts, dresses';
    } else if (categoryName === 'Home & Garden') {
        metaKeywords = 'furniture, home decor, kitchenware, garden, home improvement';
    } else {
        metaKeywords = 'beauty, skincare, makeup, personal care, organic';
    }
    document.getElementById('category-meta-keywords').textContent = metaKeywords;
}

// Initialize modals
function initModals() {
    // Add Category Modal
    const addCategoryModal = document.getElementById('add-category-modal');
    const addCategoryBtn = document.getElementById('add-category-btn');
    const closeAddCategoryModal = document.getElementById('close-add-category-modal');
    const cancelAddCategory = document.getElementById('cancel-add-category');
    const saveCategory = document.getElementById('save-category');
    
    // Delete Confirmation Modal
    const deleteConfirmationModal = document.getElementById('delete-confirmation-modal');
    const cancelDelete = document.getElementById('cancel-delete');
    const confirmDelete = document.getElementById('confirm-delete');
    
    // Edit Category Button
    const editCategoryBtn = document.getElementById('edit-category-detail-btn');
    
    // Open Add Category Modal
    addCategoryBtn.addEventListener('click', function() {
        addCategoryModal.classList.add('show');
    });
    
    // Close Add Category Modal
    closeAddCategoryModal.addEventListener('click', function() {
        addCategoryModal.classList.remove('show');
    });
    
    // Cancel Add Category
    cancelAddCategory.addEventListener('click', function() {
        addCategoryModal.classList.remove('show');
    });
    
    // Save Category
    saveCategory.addEventListener('click', function() {
        // Get form data
        const categoryName = document.getElementById('new-category-name').value;
        
        // Validate form data
        if (!categoryName) {
            showToast('Please enter a category name.', 'error');
            return;
        }
        
        // Close modal
        addCategoryModal.classList.remove('show');
        
        // Show success toast
        showToast('Category created successfully!');
        
        // Reset form
        document.getElementById('new-category-name').value = '';
        document.getElementById('new-category-slug').value = '';
        document.getElementById('new-category-description').value = '';
        document.getElementById('new-category-meta-title').value = '';
        document.getElementById('new-category-meta-keywords').value = '';
        document.getElementById('new-category-meta-description').value = '';
        document.querySelector('input[name="category-status"][value="active"]').checked = true;
    });
    
    // Open Delete Confirmation Modal
    const deleteButtons = document.querySelectorAll('.delete-category');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent event bubbling
            
            // Get category id
            const categoryId = this.getAttribute('data-id');
            
            // Set delete button data-id
            confirmDelete.setAttribute('data-id', categoryId);
            
            // Show delete confirmation modal
            deleteConfirmationModal.classList.add('show');
        });
    });
    
    // Cancel Delete
    cancelDelete.addEventListener('click', function() {
        deleteConfirmationModal.classList.remove('show');
    });
    
    // Confirm Delete
    confirmDelete.addEventListener('click', function() {
        // Get category id
        const categoryId = this.getAttribute('data-id');
        
        // Close modal
        deleteConfirmationModal.classList.remove('show');
        
        // Show success toast
        showToast('Category deleted successfully!');
    });
    
    // Edit Category
    editCategoryBtn.addEventListener('click', function() {
        // Get current category data
        const categoryName = document.getElementById('category-name').textContent;
        const categorySlug = document.getElementById('category-slug').textContent;
        const categoryParent = document.getElementById('category-parent').textContent;
        const categoryMetaTitle = document.getElementById('category-meta-title').textContent;
        const categoryMetaDescription = document.getElementById('category-meta-description').textContent;
        const categoryMetaKeywords = document.getElementById('category-meta-keywords').textContent;
        
        // Populate add category form
        document.getElementById('new-category-name').value = categoryName;
        document.getElementById('new-category-slug').value = categorySlug;
        document.getElementById('new-category-meta-title').value = categoryMetaTitle;
        document.getElementById('new-category-meta-description').value = categoryMetaDescription;
        document.getElementById('new-category-meta-keywords').value = categoryMetaKeywords;
        
        // Set parent category (simulated)
        const parentSelect = document.getElementById('new-category-parent');
        for (let i = 0; i < parentSelect.options.length; i++) {
            if (parentSelect.options[i].text === categoryParent) {
                parentSelect.selectedIndex = i;
                break;
            }
        }
        
        // Show add category modal (for editing)
        addCategoryModal.classList.add('show');
    });
}

// Initialize attributes functionality
function initAttributes() {
    // Add attribute button
    const addAttributeBtn = document.getElementById('add-attribute-btn');
    const newAttributeInput = document.getElementById('new-attribute');
    const attributeTags = document.getElementById('attribute-tags');
    
    // Add attribute
    addAttributeBtn.addEventListener('click', function() {
        const attributeName = newAttributeInput.value.trim();
        
        if (attributeName) {
            // Create new attribute tag
            const attributeTag = document.createElement('div');
            attributeTag.className = 'flex items-center bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-1';
            attributeTag.innerHTML = `
                <span class="text-sm">${attributeName}</span>
                <button class="ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 remove-attribute">
                    <i class="fas fa-times"></i>
                </button>
            `;
            
            // Add attribute tag to container
            attributeTags.appendChild(attributeTag);
            
            // Clear input
            newAttributeInput.value = '';
            
            // Focus input
            newAttributeInput.focus();
        }
    });
    
    // Remove attribute when 'x' is clicked
    attributeTags.addEventListener('click', function(event) {
        const target = event.target.closest('.remove-attribute');
        
        if (target) {
            // Remove attribute tag
            target.closest('div').remove();
        }
    });
    
    // Add attribute on Enter key press
    newAttributeInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addAttributeBtn.click();
        }
    });
}

// Bind event listeners
function bindEventListeners() {
    // Auto-generate slug from name
    const categoryNameInput = document.getElementById('new-category-name');
    const categorySlugInput = document.getElementById('new-category-slug');
    
    categoryNameInput.addEventListener('input', function() {
        // Generate slug from name
        const slug = this.value
            .toLowerCase()
            .replace(/[^\w\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
        
        // Update slug input
        categorySlugInput.value = slug;
    });
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');
    
    // Set message
    toastMessage.textContent = message;
    
    // Set toast type
    toast.className = 'toast';
    if (type === 'error') {
        toast.classList.add('error');
    } else if (type === 'warning') {
        toast.classList.add('warning');
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}