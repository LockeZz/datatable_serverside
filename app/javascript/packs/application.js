// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

require("@popperjs/core")
require("../stylesheets/application.scss")
require('datatables.net')
require('datatables.net-dt')

import "bootstrap"
import { Tooltip, Popover } from "bootstrap"
import $ from 'jquery'
global.$ = jQuery
// import 'datatables.net-dt/css/jqeury.dataTables.css'
// import 'datatables.net-select-dt/css/select.dataTables.css'
// import './pages'

// Add DataTables jQuery Plugins
// require('imports-loader?define=>false!datatables.net')(window, $)
// require('imports-loader?define=>false!datatables.net-select')(window, $)

document.addEventListener("turbolinks:load", () => {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl){
        return new Tooltip(tooltipTriggerEl)
    })

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function(popoverTriggerEl){
        return new Popover(popoverTriggerEl)
    })
})

$(document).ready(function() {
    $('#static-table').DataTable();

    $('#ajax-table').DataTable({
        ajax: '/get_dataset',
        deferRender: true,
        columns: [
            {title: 'Season', data: 'season'},
            {title: 'Episode', data: 'episode'},
            {title: 'Character', data: 'character'},
            {title: 'Line', data: 'line'}
        ]
    });

    $('#server-side-table').DataTable({
        ajax: {
            url: '/get_processed_dataset',
            dataSrc: 'lines',
        },
        serverSide: true,
        columns: [
            {title: 'Season', data: 'season'},
            {title: 'Episode', data: 'episode'},
            {title: 'Character', data: 'character'},
            {title: 'Line', data: 'line'}
        ],
        order: [['2', 'desc']]
    })
});
