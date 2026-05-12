$(document).ready(function () {
    const storageKey = 'recordsTable_searchMode';
    const searchMode = localStorage.getItem(storageKey) || 'inline';
    
    const tableoptions = {
        columnDefs: [
            { targets: -1, className: 'noVis' },
            { targets: 1, columnControl: [{targets: 1, content: 'search'}] },
            

        ]
    }
    //const recordsTable = initTable('#recordsTable', tableoptions);
    

    const inlineOptions = {
        columnControl: [
            { target: 1, content: ['search'] },
            { target: 0, content: ['order'] }
        ],

        columnDefs: [
            {
                targets: 1,               // Column 0 only
                columnControl: {
                    target: 1,              // Same header row
                    content: [['searchList']]  // Overrides searchInput for this column
                }
            }
        ]
    }

    const dropdownOptions = {
        columnControl: [
            //{ target: 0, content: ['search'] },
            { target: 0, content: ['order', 'searchDropdown'] }
        ],

        columnDefs: [
            {
                targets: 1,               // Column 0 only
                columnControl: {
                    target: 0,              // Same header row
                    content: [['searchList']]  // Overrides searchInput for this column
                }
            }
        ]
    }
    
    const recordsTable = initTable('#recordsTable', searchMode === 'inline' ? inlineOptions : dropdownOptions);
    //new DataTable('#recordsTable', dropdownOptions);
});