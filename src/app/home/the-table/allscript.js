$(document).ready(function() {

    $('#example tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input style="width:10px !important" type="text" placeholder="" />' );
    } );


    var table = $('#example').DataTable({
        "lengthMenu": [[10, 25, 50, -1, 05], [10, 25, 50, "All", 05]],
        scrollX:  true,
        fixedColumns:   {
            leftColumns: 4,
        }
    });

    $('#example2 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input style="width:65px" type="text" placeholder="" />' );
    } );


    var table2 = $('#example2').DataTable({

    });


    table2.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );

    var expandLegend = function() {
        var exp = chart.legend.expanded();
        chart.legend.expanded(!exp);
        chart.update();
    }

    // var histcatexplong = [
    //     {
    //         "key" : "Consumer Discretionary" ,
    //         "values" : [[ 1333166400000 , 0] , [ 1335758400000 , 16.75543633539] , [ 1338436800000 , 16.182906906042]]
    //     } ,
    //     {
    //         "key" : "Consumer Staples" ,
    //         "values" : [[ 1333166400000 , 17.429019937289] , [ 1335758400000 , 16.75543633539] , [ 1338436800000 , 16.182906906042]]
    //     } ,
    //     {
    //         "key" : "Energy1" ,
    //         "values" : [[ 1333166400000 , 17.429019937289] , [ 1335758400000 , 16.75543633539] , [ 1338436800000 , 16.182906906042]]
    //     },
    //     {
    //         "key" : "Energy2" ,
    //         "values" : [[ 1333166400000 , 17.429019937289] , [ 1335758400000 , 16.75543633539] , [ 1338436800000 , 16.182906906042]]
    //     },{
    //         "key" : "Energy3" ,
    //         "values" : [[ 1333166400000 , 17.429019937289] , [ 1335758400000 , 16.75543633539] , [ 1338436800000 , 16.182906906042]]
    //     }
    //
    // ];



    var histcatexplong = localStorage.getItem('tracker_graph_dis');
    histcatexplong = JSON.parse(histcatexplong);

    var colors = d3.scale.category20();

    var chart;
    nv.addGraph(function() {
        chart = nv.models.stackedAreaChart()
            .useInteractiveGuideline(true)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1] })
            .controlLabels({stacked: "Stacked"})
            .duration(300);
        chart.xAxis.tickFormat(function(d) { return d3.time.format('%d/%m/%Y')(new Date(d)) });
        chart.yAxis.tickFormat(d3.format('.2f'));
        chart.legend.vers('furious');
        d3.select('#chart1')
            .datum(histcatexplong)
            .transition().duration(1000)
            .call(chart)
            .each('start', function() {
                setTimeout(function() {
                    d3.selectAll('#chart1 *').each(function() {
                        if(this.__transition__)
                            this.__transition__.duration = 1;
                    })
                }, 0)
            });
        nv.utils.windowResize(chart.update);
        return chart;
    });


} );
