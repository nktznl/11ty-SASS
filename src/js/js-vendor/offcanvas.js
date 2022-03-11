// https://github.com/vmitsaras/js-offcanvas
$( function(){

  $( document ).bind( "beforecreate.offcanvas", function( e ){
    var dataOffcanvas = $( e.target ).data('offcanvas-component');
    console.log(dataOffcanvas);
    dataOffcanvas.onInit =  function() {
     console.log(this);
    };
  } );

  $( document ).bind( "create.offcanvas", function( e ){
    var dataOffcanvas = $( e.target ).data('offcanvas-component');
    console.log(dataOffcanvas);
    dataOffcanvas.onOpen =  function() {
      console.log('Callback onOpen');
    };
    dataOffcanvas.onClose =  function() {
      console.log('Callback onClose');
    };
  });

  $( document ).bind( "clicked.offcanvas-trigger clicked.offcanvas", function( e ){
    var dataBtnText = $( e.target ).text();
    console.log(e.type + '.' + e.namespace + ': ' + dataBtnText);
  } );

  $( document ).bind( "open.offcanvas", function( e ){
    var dataOffcanvasID = $( e.target ).attr('id');
    console.log(e.type + ': #' + dataOffcanvasID);
  } );

  $( document ).bind( "resizing.offcanvas", function( e ){
    var dataOffcanvasID = $( e.target ).attr('id');
    console.log(e.type + ': #' + dataOffcanvasID);
  } );

  $( document ).bind( "close.offcanvas", function( e ){
    var dataOffcanvasID = $( e.target ).attr('id');
    console.log(e.type + ': #' + dataOffcanvasID);
  } );

  $( '.js-open' ).bind( "create.offcanvas", function( e ){
    var dataOffcanvas = $(this).data('offcanvas-component');
    setTimeout(function(){
      //dataOffcanvas.open();
    }, 200);
  } );

  $( document ).bind( "beforecreate.offcanvas", function( e ){
    var $offcanvas = $( e.target ),
        api = $offcanvas.data('offcanvas-component');



    function onFocusIn() {
      console.log('onFocusIn');
      api.options.resize = false;
       console.log(api.options.resize);
       $(window).off('resize.offcanvas orientationchange.offcanvas');
    }

    function onFocusOut() {
      console.log('onFocusOut');
      api.options.resize = true;
       console.log(api.options.resize);
       $(window).on('resize.offcanvas orientationchange.offcanvas');
      api.resize();
    }

    $offcanvas.on('focusin', 'input,textarea', onFocusIn)
      .on('focusout', 'input,textarea', onFocusOut);
  });


    // Trigger Enhance
    $( document ).trigger( "enhance" );
});