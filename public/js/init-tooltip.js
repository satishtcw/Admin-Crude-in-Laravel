ua = navigator.userAgent.toLowerCase();
isIE6 = ((ua.indexOf("msie 6.0") != -1));

function init_tooltip(selector, options)
{
	if (isIE6) return;

	var defaults = {
		moveleft: 0,
		movetop: 0,
		width: '',
		align: 'top',
		text_align: '',
		tooltip_add_class: '',
		format_regexp: true    //formázzuk e bb code alapján
	}

	var opts = $.extend({}, defaults, options);

	if ($('#tooltipbox').length == 0) $('body').append('<div id="tooltipbox" class="tooltip"><div class="content"></div></div>');

	var mainelement = $(selector);
	var box = $('#tooltipbox');


	$(mainelement).each(function () {
		$(this).data('title', $(this).attr('title'));
		$(this).removeAttr('title');

		if ($(this).data('textelem'))
		{
			var elem = $(this).data('textelem');
			if ($(elem).length > 0)
			{
				$(this).data('title', $(elem).html());
			}
		}
	});

	$(mainelement).off('mouseenter.tooltip click.tooltip');

	$(mainelement).on('mouseenter.tooltip click.tooltip', function (event) {
		event.preventDefault();
		event.stopPropagation();

		$(box).removeAttr('style');

		$(this).data('title', $(this).attr('title'));
		$(this).removeAttr('title');

		$(box).removeClass();
		$(box).addClass('tooltip');

		if (opts.tooltip_add_class != '')
		{
			$(box).addClass(opts.tooltip_add_class);
		}

		if (opts.width != '')
			$(box).css('width', opts.width);

		if (opts.text_align != '')
			$(box).css('text-align', opts.text_align);

		var title = $(this).data('title');
		var header = $(this).data('header');

		if (!title) return;

		if (header) title = '<span class="header">' + header + '</span>' + title;

		if (opts.format_regexp)
		{
			title = title.replace(/\[b\]/gi, '<span>');
			title = title.replace(/\[\/b\]/gi, '</span>');
			title = title.replace(/\[br\]/gi, '<br/>');
		}

		var offset = $(this).offset();
		var width = $(this).width();
		var height = $(this).height();

		$(box).find('.content').html(title);

		var boxwidth = $(box).outerWidth();
		var boxheight = $(box).outerHeight();

		var screen_with = $('body').width();

		var pos_left = 0;
		var pos_top = 0;

		var distance = 5;

		if (opts.align == 'top')
		{
			pos_left = offset.left - ((boxwidth - width) / 2);
			pos_top = offset.top - boxheight - distance;
		}
		else if (opts.align == 'bottom')
		{
			pos_left = offset.left - ((boxwidth - width) / 2);
			pos_top = offset.top + height + distance;
		}
		else if (opts.align == 'left')
		{
			pos_left = offset.left - boxwidth - distance;
			pos_top = offset.top + height / 2 - boxheight / 2;
		}
		else if (opts.align == 'right')
		{
			pos_left = offset.left + width + distance;
			pos_top = offset.top + height / 2 - boxheight / 2;
		}

		pos_left += opts.moveleft;
		pos_top += opts.movetop;

		if (pos_left < 0) pos_left = 0;
		if (pos_left + boxwidth > screen_with)
		{
			var dif = pos_left + boxwidth - screen_with;
			pos_left -= dif;
		}

		if (pos_top < 0) pos_top = 0;

		$(box).css('left', pos_left + 'px').css('top', pos_top + 'px');

		$(box).addClass('opened');

	});

	$(mainelement).off('mouseleave.tooltip');

	$(mainelement).on('mouseleave.tooltip', function (event) {
		$(box).removeClass('opened');
	});

	$(box).off('click.tooltip mouseleave.tooltip');

	$(box).on('click.tooltip mouseleave.tooltip', function (event) {
		$(box).removeClass('opened');
	});


	$(box).off('mouseenter.tooltip');

	$(box).on('mouseenter.tooltip', function (event) {
		$(box).addClass('opened');
	});


}