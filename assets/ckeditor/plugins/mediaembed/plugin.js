/*
* Embed Media Dialog based on http://www.fluidbyte.net/embed-youtube-vimeo-etc-into-ckeditor
*
* Plugin name:      mediaembed
* Menu button name: MediaEmbed
*
* Youtube Editor Icon
* http://paulrobertlloyd.com/
*
* @author Fabian Vogelsteller [frozeman.de]
* @version 0.5
*/
( function() {
CKEDITOR.plugins.add( 'mediaembed',
{
  init: function( editor )
  {
    editor.addCommand( 'mediaembed',
      {
        exec : function( editor )
        {    
          editor.insertHtml( '[youtube]youtube URL[/youtube]' );
        }
      });
    editor.ui.addButton( 'mediaembed',
    {
      label: 'Youtube Video',
      command: 'mediaembed',
      icon: this.path + 'icons/mediaembed.png'
    } );
  }
} );
} )();
