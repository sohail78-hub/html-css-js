// Main Dashboard JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Check for user's color scheme preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark');
}

// Toggle dark/light mode
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
});

// Sidebar toggling
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const toggleSidebar = document.getElementById('toggle-sidebar');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mainContent = document.querySelector('.main-content');
const sidebarText = document.querySelectorAll('.sidebar-text');
const logo = document.getElementById('logo');
 // Make sidebar scrollable
 const sidebarContent = document.querySelector('.sidebar-content');
 sidebarContent.style.overflowY = 'auto';
 sidebarContent.style.maxHeight = 'calc(100vh - 70px)';

function toggleSidebarCollapse() {
    if (sidebar.classList.contains('sidebar-expanded')) {
        sidebar.classList.replace('sidebar-expanded', 'sidebar-collapsed');
        mainContent.classList.replace('main-content-expanded', 'main-content-collapsed');
        sidebarText.forEach(el => el.style.display = 'none');
        logo.style.marginRight = '0';
    } else {
        sidebar.classList.replace('sidebar-collapsed', 'sidebar-expanded');
        mainContent.classList.replace('main-content-collapsed', 'main-content-expanded');
        sidebarText.forEach(el => el.style.display = 'inline');
        logo.style.marginRight = '0.5rem';
    }
}

toggleSidebar.addEventListener('click', toggleSidebarCollapse);

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', function() {
    sidebar.classList.add('show');
    overlay.classList.add('show');
});

overlay.addEventListener('click', function() {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');
});

// Check screen size on load
function checkScreenSize() {
    if (window.innerWidth < 768) {
        sidebar.classList.remove('sidebar-collapsed');
        sidebar.classList.add('sidebar-expanded');
        mainContent.classList.remove('main-content-collapsed');
        mainContent.classList.add('main-content-expanded');
        sidebarText.forEach(el => el.style.display = 'inline');
    }
}

window.addEventListener('load', checkScreenSize);
window.addEventListener('resize', checkScreenSize);

// Navigation between pages
const pages = document.querySelectorAll('.page');
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', function() {
        const targetPage = this.getAttribute('data-page');
        
        // Hide all pages
        pages.forEach(page => {
            page.classList.add('hidden');
        });
        
        // Show target page
        document.getElementById(`${targetPage}-page`).classList.remove('hidden');
        
        // Update active state
        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });
        this.classList.add('active');
          
                // Here you would load the appropriate page content
                // For example, using AJAX or changing the iframe source

        // Close mobile sidebar if open
        if (window.innerWidth < 768) {
            sidebar.classList.remove('show');
            overlay.classList.remove('show');
        }
    });
});

       // Currency selector
       const currencySelector = document.getElementById('currency-selector');
       const currencyDropdown = document.querySelector('.currency-dropdown');
       const currentCurrency = document.getElementById('current-currency');
       const currencyOptions = document.querySelectorAll('.currency-option');
       
       // Toggle currency dropdown
       currencySelector.addEventListener('click', function() {
           currencyDropdown.classList.toggle('hidden');
       });
       
       // Close currency dropdown when clicking outside
       document.addEventListener('click', function(event) {
           if (!currencySelector.contains(event.target)) {
               currencyDropdown.classList.add('hidden');
           }
       });
       
       // Update currency when option is selected
       currencyOptions.forEach(option => {
           option.addEventListener('click', function() {
               const symbol = this.getAttribute('data-symbol');
               const code = this.getAttribute('data-code');
               
               // Update current currency
               currentCurrency.textContent = symbol;
               
               // Update all currency symbols on the page
               document.querySelectorAll('.currency-symbol').forEach(el => {
                   el.textContent = symbol;
               });
               
               // Close dropdown
               currencyDropdown.classList.add('hidden');
               
               // Here you would update the currency in the backend
               console.log(`Currency changed to ${code}`);
           });
       });
   });
   
// Tabs functionality
function setupTabs() {
    const tabContainers = document.querySelectorAll('.tabs');
    
    tabContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab');
        
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                const tabId = this.getAttribute('data-tab');
                const tabContents = this.closest('.card, .modal-content').querySelectorAll('.tab-content');
                
                // Hide all tab contents
                tabContents.forEach(content => {
                    content.classList.add('hidden');
                    content.classList.remove('active');
                });
                
                // Show selected tab content
                const targetContent = document.getElementById(`${tabId}`);
                if (targetContent) {
                    targetContent.classList.remove('hidden');
                    targetContent.classList.add('active');
                }
                
                // Update active state
                tabs.forEach(t => {
                    t.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    });
}

setupTabs();

// Custom checkbox functionality
const checkboxes = document.querySelectorAll('.custom-checkbox');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', function() {
        this.classList.toggle('checked');
        
        // If this is the "select all" checkbox
        if (this.id === 'select-all-checkbox') {
            const productCheckboxes = document.querySelectorAll('.product-checkbox');
            const isChecked = this.classList.contains('checked');
            
            productCheckboxes.forEach(box => {
                if (isChecked) {
                    box.classList.add('checked');
                } else {
                    box.classList.remove('checked');
                }
            });
        }
        
        if (this.id === 'select-all-low-stock') {
            const lowStockCheckboxes = document.querySelectorAll('.low-stock-checkbox');
            const isChecked = this.classList.contains('checked');
            
            lowStockCheckboxes.forEach(box => {
                if (isChecked) {
                    box.classList.add('checked');
                } else {
                    box.classList.remove('checked');
                }
            });
        }
    });
});

// Modal functionality
const addProductBtn = document.getElementById('add-product-btn');
const addProductModal = document.getElementById('add-product-modal');
const closeAddProductModal = document.getElementById('close-add-product-modal');

addProductBtn.addEventListener('click', function() {
    addProductModal.classList.add('show');
});

closeAddProductModal.addEventListener('click', function() {
    addProductModal.classList.remove('show');
});

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast-notification');
    const toastMessage = document.getElementById('toast-message');
    
    toastMessage.textContent = message;
    
    toast.className = 'toast';
    if (type === 'error') {
        toast.classList.add('error');
    } else if (type === 'warning') {
        toast.classList.add('warning');
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Sample toast trigger
// setTimeout(() => {
//     showToast('Product saved successfully!');
// }, 2000);

// Initialize Charts
function initCharts() {
    // Sales Overview Chart
    const salesCtx = document.getElementById('salesChart');
    if (salesCtx) {
        const salesChart = new Chart(salesCtx, {
            type: 'line',
            data: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                datasets: [{
                    label: 'This Week',
                    data: [4200, 5500, 4800, 6500, 5200, 7800, 8500],
                    borderColor: '#5D5CDE',
                    backgroundColor: 'rgba(93, 92, 222, 0.1)',
                    tension: 0.3,
                    fill: true
                }, {
                    label: 'Last Week',
                    data: [3800, 4100, 3600, 5800, 4900, 6200, 7200],
                    borderColor: '#94A3B8',
                    backgroundColor: 'rgba(148, 163, 184, 0.1)',
                    borderDash: [5, 5],
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            boxWidth: 6
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.dataset.label + ': $' + context.raw;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            drawBorder: false
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + value;
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
    
    // Top Selling Products Chart
    const productsCtx = document.getElementById('productsChart');
    if (productsCtx) {
        const productsChart = new Chart(productsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Wireless Earbuds', 'Smart Watch', 'T-Shirts', 'Coconut Oil', 'Coffee Table'],
                datasets: [{
                    data: [35, 25, 20, 15, 5],
                    backgroundColor: [
                        '#5D5CDE', 
                        '#2DD4BF', 
                        '#F59E0B',
                        '#EC4899',
                        '#94A3B8'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            boxWidth: 6,
                            padding: 20
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.raw + '%';
                            }
                        }
                    }
                },
                cutout: '70%'
            }
        });
    }
}

// Initialize charts when the page is loaded
window.addEventListener('load', initCharts);