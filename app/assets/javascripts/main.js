$(function() {
    $('.date-picker').datepicker( {
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'MM yy',
        onClose: function(dateText, inst) {
            var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
            var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
            $(this).datepicker('setDate', new Date(year, month, 1));
        }
    });





    $('#container').highcharts({
        title: {
            text: 'Baby Booms in Spain',
            x: -20 //center
        },
        // subtitle: {
        //     text: '2013-2014',
        //     x: -20
        // },

        colors: ["#FF99CC", "#6699FF", "#33D6AD", "#FFA347"],
        xAxis: {
            categories: ['Easter 2012', 'May 2012', 'Day of Canary Islands 2012', 'Euro Cup Final 2012', 'Aug 2012', 'Sep 2012',
                'Oct 2012', 'Nov 2012', 'Xmas and NYE 2012', 'Jan 2013', 'Carnival 2013', 'Easter 2013',
                'Apr 2013', 'May 2013', 'Day of Canary Islands 2013', 'Mundial 2013', 'Aug 2013', 'Sep 2013',
                    'Oct 2013', 'Nov 2013', 'Xmas and NYE 2013', 'Jan 2014', 'Carnival 2014', 'Easter 2014']
        },
        yAxis: {
            title: {
                text: 'Babies born 9 months later'
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
            name: 'Las Palmas',
            data: [688,689,677,742,777,764,786,769,756,773,612,669,620,667,690,749,718,828,754,716,744,845,762,779,739]
        }, {
            name: 'Barcelona',
            data: [4629,4964,4502,4811,4732,4666,5033,4590,4462,4461,4068,4282,4178,4385,4079,4582,4430,4443,4650,4383,4346,5061,4594,5107,4769]
        }, {
            name: 'Madrid',
            data: [5894,6206,5882,6046,5877,5714,5950,5505,5383,5608,4908,5272,5604,5627,5516,5742,5523,5461,5628,5150,5304,5989,5466,6284,6222]
        }, {
            name: 'All Spain',
            data: [36565,38955,36658,38605,39250,38460,40027,37187,36337,36967,32290,34543,34593,35013,33985,37010,36456,36840,37631,35261,35126,40552,36215,40462,38617]
        }]
    });

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


});
