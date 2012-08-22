(function($) {
  $.fn.rdropdown = function(opts) {
    var showingDropdown, showingMenu, showingParent;
    
    this.each(function() {
      if (opts !== false) {
        opts = $.extend($.fn.rdropdown.defaults, opts);

        $(opts.menu).hide();
        
        $(this).bind('click', function(event) {
          if (event) {
            event.stopPropagation();
          };
          if (event) {
            event.preventDefault();
          };
          showMenu($(this), $(opts.menu));
        });
                     
        $(this).bind('focus', function() {
          showMenu($(this), $(opts.menu));
        });

        function hideMenu() {
          if (showingDropdown) {
            showingDropdown.removeClass(opts.activeClass);
            showingMenu.hide();
            showingParent = null;
          };
        };
        
        function showMenu(node, menuNode) {
          hideMenu();
          showingDropdown = node.addClass(opts.activeClass);
          showingMenu = menuNode.show();
          showingParent = node.parent();
        }

        $(document.body).bind('click', function(event) {
          if (showingParent) {
            var parentElement = showingParent[0];
            if(!$.contains(parentElement,event.target) || !parentElement == event.target) {
              hideMenu();
            };
          }
        });
      }
    });

    return self;
  };

  $.fn.rdropdown.defaults = {
    menu: 'div#menu',
    activeClass: 'rdropdown'
  };

})(jQuery);
