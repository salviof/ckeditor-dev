
/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

/**
 * @fileOverview Definition for placeholder plugin dialog.
 *
 */

'use strict';

CKEDITOR.dialog.add( 'placeholderSeletor', function( editor ) {
	var lang = editor.lang.placeholderSeletor,
		generalLabel = editor.lang.common.generalTab,
		validNameRegex = /^[^\[\]<>]+$/;

	return {
		title: lang.title,
		minWidth: 300,
		minHeight: 80,
		contents: [
			{
				id: 'info',
				label: generalLabel,
				title: generalLabel,
				elements: [
					// Dialog window UI elements.
					{id: "name", 
                                        type: "select", items: [],
                                        "default": "meetingTime", 
                                        style: "min-width: 500px;", 
                                        label: lang.name, "default": "", required: !0, 
            
						
						setup: function( widget ) {
                 this.setValue(widget.data.name);
						
						},
                         onLoad: function (widget) {
                             
						console.log($(editor.element.$));
						console.log($(editor));
  						var palavras = $.parseJSON($(editor.element.$).attr("palavras_placeholder"));
                            			console.log(palavras);
                            			var c = $(this.getInputElement().$);
                            			"undefined" !== typeof widget && $.each(palavras, function (chave, valor) {
                                		c.append($('\x3coption value\x3d"' + valor + '"\x3e' + valor + "\x3c/option\x3e"));
						})

                             
                         },
                     
                     
						onShow: function () {
			               	        	var a = $(editor.element.$).attr("palavras_placeholder");
                            				console.log(a);
                            		
                        			},
						commit: function( widget ) {
                            widget.setData("name", this.getValue());
                            
                        }




					}
				]
			}
		]
	};
} );
