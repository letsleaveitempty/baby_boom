$(function() {
    $('.date-picker').datepicker( {
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'mm yy',
        onClose: function(dateText, inst) {
            var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).datepicker('setDate', new Date(year, month, 1));
        }
    });





    $('#container2').highcharts({
        title: {
            text: 'Monthly Average Birth',
            x: -20 //center
        },
        subtitle: {
            text: 'Spain',
            x: -20
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
            title: {
                text: 'Babies born'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: ' babies'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Babies born',
            data: [36565,38955,36658,38605,39250,38460,40027,37187,36337,36967,32290,34543]
        }]
    });


    function refreshGraphic(values, month){
        categories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        for(i = month.first; i<=month.last; i++){
            categories[i] = '<b>' + categories[i] + "</b>"
        }


        $('#container2').highcharts({
            title: {
                text: 'Monthly Average Birth',
                x: -20 //center
            },
            subtitle: {
                text: 'Spain',
                x: -20
            },
            xAxis: {
                categories: categories
            },
            yAxis: {
                title: {
                    text: 'Babies born'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                valueSuffix: ' babies'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{
                name: 'Babies born',
                data: values
            }]
        });
    }

    var map;
    var grancanaria = new google.maps.LatLng(33.211116,-12.832031);
    var mapOptions = {
        zoom: 4,
        center: grancanaria,
        mapTypeControl: true,
        zoomControl: false,
        panControl: false,
        MapType: true,
        streetViewControl: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);




    var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/1JduTAYJjUSAUV5Cp1ps5anvRlfwUe3tijgYZtLKCTRg/pubhtml';

    function init() {
        Tabletop.init( { key: public_spreadsheet_url,
            callback: callBack,
            simpleSheet: true }
        )
    }

    var borns = new Array();
    function callBack(data) {
        data.forEach(function(born){

            born.year = parseInt(born.month.split("M")[0]);
            born.month = parseInt(born.month.split("M")[1]);
            born.number = parseInt(born.number);
            borns.push(born);
        })
        return data;
    }

    $('#refresh-button').on('click', function(){
        var toMonth = parseInt($('#to').datepicker().val().split(' ')[0]);
        var toYear = parseInt($('#to').datepicker().val().split(' ')[1]);

        var fromMonth = parseInt($('#from').datepicker().val().split(' ')[0]);
        var fromYear = parseInt($('#from').datepicker().val().split(' ')[1]);
        searchIntervals(toMonth, toYear, fromMonth, fromYear);
    })

    function searchIntervals(toMonth, toYear, fromMonth, fromYear){
        values = new Array();
        console.log(toMonth, toYear, fromMonth, fromYear);

        borns.forEach(function(born){
            if(born.year>=fromYear && born.year<=toYear){
                values.push(born.number);
                console.log(born);
            }
        })
        values.reverse();
        refreshGraphic(values, {"first": fromMonth, "last": toMonth});
        console.log(values);
    }


    init();

});
