
const table = $("#recordsTable").DataTable({
    columnControl: {
        target: 1,
        content: ['search']
    },
    language: {
        buttons: {//needed to override the "split" button for saved states to change the default text value
            savedStates: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-save-all-icon lucide-save-all"><path d="M10 2v3a1 1 0 0 0 1 1h5"/><path d="M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"/><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"/></svg>'
        }
    },
    colReorder: true,
    //stateSave: true,
    ordering: {
        indicators: false,
        handler: false
    },
    columnDefs: [
        {
            targets: -1,
            className: 'noVis'
        }
    ],
    layout: {
        topStart: {
            buttons: [
                {
                    extend: 'copy',
                    text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'
                },
                {
                    extend: 'colvis',
                    columns: ':not(.noVis)',
                    popoverTitle: 'Column visibility selector',
                    text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-columns3-cog-icon lucide-columns-3-cog"><path d="M10.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"/><path d="m14.3 19.6 1-.4"/><path d="M15 3v7.5"/><path d="m15.2 16.9-.9-.3"/><path d="m16.6 21.7.3-.9"/><path d="m16.8 15.3-.4-1"/><path d="m19.1 15.2.3-.9"/><path d="m19.6 21.7-.4-1"/><path d="m20.7 16.8 1-.4"/><path d="m21.7 19.4-.9-.3"/><path d="M9 3v18"/><circle cx="18" cy="18" r="3"/></svg>'
                },
                {
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
                            //search: true
                        }
                    },
                    text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-save-icon lucide-save"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"/><path d="M7 3v4a1 1 0 0 0 1 1h7"/></svg>'
                },
                {
                    extend: 'savedStates',
                    config: {
                        //preDefined: {
                        //    'London Team': {
                        //        search: { search: 'London', smart: true, regex: false, caseInsensitive: true },
                        //        order: [[2, 'asc']],
                        //        stateRestoreConfig: {
                        //            save: false,
                        //            remove: false,
                        //            rename: false
                        //        }
                        //    }
                        //},
                        //stateRestoreConfig: {
                        //    save: false,
                        //    remove: false,
                        //    rename: false
                        //}
                    }
                },
                {
                    text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-ccw-icon lucide-rotate-ccw"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
                    action: function (e, dt, node, config) {
                        dt.search('');
                        // Clear ColumnControl dropdown search inputs and condition selectors
                        dt.columns().columnControl.searchClear();
                        dt.columns().search('');
                        dt.order([[0, 'asc']]);
                        dt.columns(':not(.noVis)').visible(true);
                        dt.colReorder.reset();
                        dt.page.len(10);
                        dt.draw();
                    }
                }
            ]
        }
    }
});
