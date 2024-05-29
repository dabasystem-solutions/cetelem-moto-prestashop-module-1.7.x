$(function() {
  if ($('#cetelem-financiacion').length) {
    $('#cetelem-financiacion').html('');
    postscribe('#cetelem-financiacion', "<script type=\"text\/javascript\" src=\"" + url_cms + center_code + "\" ><\/script>");
  }
  if ($('#cetelem-financiacion-plain').length) {
    $('#cetelem-financiacion-plain').html('');
    postscribe('#cetelem-financiacion-plain', "<script type=\"text\/javascript\" src=\"" + url_cms_plain + center_code + "\" ><\/script>");
  }
});