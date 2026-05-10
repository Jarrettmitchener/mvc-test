// ============================================================
// SVG icons — shared across all tables
// ============================================================
const SVG = {
    savedStates: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-save-all-icon lucide-save-all"><path d="M10 2v3a1 1 0 0 0 1 1h5"/><path d="M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"/><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"/></svg>',
    copy: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>',
    colvis: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-columns3-cog-icon lucide-columns-3-cog"><path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"/><path d="m14.3 19.6 1-.4"/><path d="M15 3v7.5"/><path d="m15.2 16.9-.9-.3"/><path d="m16.6 21.7.3-.9"/><path d="m16.8 15.3-.4-1"/><path d="m19.1 15.2.3-.9"/><path d="m19.6 21.7-.4-1"/><path d="m20.7 16.8 1-.4"/><path d="m21.7 19.4-.9-.3"/><path d="M9 3v18"/><circle cx="18" cy="18" r="3"/></svg>',
    createState: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-save-icon lucide-save"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>',
    reset: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw-icon lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
    // Shown when in inline mode — clicking will switch TO dropdown
    searchDropdown: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-list"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/><path d="M14 4h7"/><path d="M14 9h4"/><path d="M14 15h7"/><path d="M14 20h4"/></svg>',
    // Shown when in dropdown mode — clicking will switch TO inline
    searchInline: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rows-3"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    print: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-printer-icon lucide-printer"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>',
    download: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>',

};

// ============================================================
// initTable(selector, options)
//
// Initialises a DataTable with a standard set of buttons and
// behaviours. Pass a selector string and any DataTables options
// to override or extend the defaults.
//
// Note: arrays (buttons, columnDefs) are fully replaced when
// overridden — they are not merged with the defaults. If you
// need to extend the default buttons array, spread the defaults
// manually in your override.
//
// Usage examples:
//
//   // Basic — all defaults
//   const table = initTable('#recordsTable');
//
//   // With overrides
//   const table = initTable('#ordersTable', {
//       order: [[2, 'desc']],
//       pageLength: 25,
//       columnDefs: [
//           { targets: -1, className: 'noVis' },
//           { targets: 0, visible: false }
//       ]
//   });
// ============================================================
function initTable(selector, options = {}) {
    // Derive a unique localStorage key from the selector so each
    // table remembers its own search mode preference independently
    const storageKey = `${selector.replace('#', '')}_searchMode`;
    const searchMode = localStorage.getItem(storageKey) || 'inline';

    // Build the columnControl config based on the stored mode:
    // inline: order button in row 0, search inputs in row 1
    // dropdown: order button + search dropdown in row 0 only
    const columnControlConfig = searchMode === 'inline'
        ? [
            { target: 0, content: ['order'] },
            { target: 1, content: ['search'] }
        ]
        : [
            { target: 0, content: ['order', ['orderAsc', 'orderDesc', 'search']] }
        ];

    const defaultConfig = {
        columnControl: columnControlConfig,
        responsive: true,
        language: {
            buttons: {
                // Overrides the split button label for savedStates
                savedStates: SVG.savedStates
            }
        },

        colReorder: true,
        stateSave: true,

        // Removes the default ordering to not duplicate with colControl ordering
        ordering: {
            indicators: false,
            handler: false
        },

        columnDefs: [
            {
                // Hide the last column from exports and column visibility picker
                targets: -1,
                className: 'noVis'
            }
        ],
        
        layout: {
            topStart: [
                {
                    buttons: {
                        // applies these classes globally
                        dom: {
                            button: {
                                className: 'btn btn-bar'
                            }
                        },
                        buttons: [
                            
                            {
                                // Column visibility picker — excludes noVis columns
                                extend: 'colvis',
                                columns: ':not(.noVis)',
                                popoverTitle: 'Column visibility selector',
                                text: SVG.colvis
                            },
                            {
                                // Save a new state via the creation modal
                                extend: 'createState',
                                config: {
                                    creationModal: true,
                                    toggle: {
                                        columns: {
                                            search: true,
                                            visible: true
                                        },
                                        length: true,
                                        order: true,
                                        paging: true,
                                    }
                                },
                                text: SVG.createState
                            },
                            {
                                // Saved states split button
                                extend: 'savedStates',
                                config: {
                                    // preDefined: { ... }
                                    // stateRestoreConfig: { ... }, couldn't get this working to stop deletion of predefined states
                                }
                            },
                            {
                                // Reset — clears all searches, ordering, visibility, and column order
                                text: SVG.reset,
                                titleAttr: 'Reset view',
                                action: function (e, dt, node, config) {
                                    dt.search('');
                                    dt.columns().columnControl.searchClear();
                                    dt.columns().search('');
                                    dt.order([[0, 'asc']]);
                                    dt.columns(':not(.noVis)').visible(true);
                                    dt.colReorder.reset();
                                    dt.page.len(10);
                                    dt.draw();
                                }
                            },
                            {
                                // Toggle between inline (second header row) and dropdown search.
                                // Saves preference to localStorage and reloads the page.
                                // Icon shows what the button will switch TO, not the current mode.
                                text: searchMode === 'inline' ? SVG.searchDropdown : SVG.searchInline,
                                titleAttr: searchMode === 'inline' ? 'Switch to dropdown search' : 'Switch to inline search',
                                action: function (e, dt, node, config) {
                                    const newMode = searchMode === 'inline' ? 'dropdown' : 'inline';
                                    const confirmed = confirm('Switching search style will reload the page. Continue?');
                                    if (confirmed) {
                                        localStorage.setItem(storageKey, newMode);
                                        location.reload();
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    // The info button, to teach users how to use the tables
                    buttons: {
                        dom: {
                            button: {
                                className: 'btn btn-bar'
                            }
                        },
                        buttons: [
                            {
                                // Copy to clipboard — omits title and noVis columns
                                extend: 'copy',
                                text: SVG.copy,
                                title: null,
                                exportOptions: {
                                    columns: ':not(.noVis)'
                                }
                            },
                            {
                                // Print — omits title and noVis columns
                                extend: 'print',
                                text: SVG.print,
                                titleAttr: 'Print table',
                                exportOptions: {
                                    columns: ':not(.noVis)'
                                }
                            },
                            {
                                // Print — omits title and noVis columns
                                extend: 'collection',
                                text: SVG.download,
                                titleAttr: 'Download',
                                buttons: [
                                    {
                                        //excel
                                        extend: 'excelHtml5',
                                        exportOptions: {
                                            columns: ':not(.noVis)'
                                        }
                                    },
                                    {
                                        //csv
                                        extend: 'csvHtml5',
                                        exportOptions: {
                                            columns: ':not(.noVis)'
                                        }
                                    },
                                    {
                                        //csv
                                        extend: 'pdfHtml5',
                                        exportOptions: {
                                            columns: ':not(.noVis)'
                                        }
                                    }
                                ]
                            }
                        ]
                    }
                },
                {
                    // The info button, to teach users how to use the tables
                    buttons: {
                        dom: {
                            button: {
                                className: 'btn btn-outline-info'
                            }
                        },
                        buttons: [
                            {
                                text: SVG.info,
                                titleAttr: 'Table actions, functions, and tutorials'
                            }
                        ]
                    }
                }
            ]
        }
    };

    // Deep merge the defaults with any table-specific overrides.
    // Arrays (buttons, columnDefs) are fully replaced when provided —
    // they are not appended to the defaults.
    const finalConfig = $.extend(true, {}, defaultConfig, options);

    return new DataTable(selector, finalConfig);
}
