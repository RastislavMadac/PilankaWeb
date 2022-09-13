"use strict";
const img_intagram = document.getElementById("jq-social-a-ico-1");
const img_youtube = document.getElementById("jq-social-a-ico-2");
const img_pinterest = document.getElementById("jq-social-a-ico-3");
const img_facebook = document.getElementById("jq-social-a-ico-4");
const img_twitter = document.getElementById("jq-social-a-ico-5");

function mousein(ele) {
  if (ele == 1) {
    img_intagram.setAttribute(
      "src",
      "images/icons/C2993766_instagram_social media_icon.png"
    );
  } else if (ele == 2) {
    img_youtube.setAttribute(
      "src",
      "images/icons/C328844_square_youtube_icon.png"
    );
  } else if (ele == 3) {
    img_pinterest.setAttribute(
      "src",
      "images/icons/C317731_pinterest_social_social media_icon.png"
    );
  } else if (ele == 4) {
    img_facebook.setAttribute(
      "src",
      "images/icons/C1220372_fb_communication_facebook_social_icon.png"
    );
  } else {
    img_twitter.setAttribute(
      "src",
      "images/icons/C317720_social media_tweet_twitter_social_icon.png"
    );
  }
}
function mouseout(ele) {
  if (ele == 1) {
    img_intagram.setAttribute(
      "src",
      "images/icons/9034983_logo_instagram_icon.png"
    );
  } else if (ele == 2) {
    img_youtube.setAttribute(
      "src",
      "images/icons/1531622_logo_media_social_youtube_icon.png"
    );
  } else if (ele == 3) {
    img_pinterest.setAttribute(
      "src",
      "images/icons/5279116_pin_pinterest_inspiration_pinterest logo_icon.png"
    );
  } else if (ele == 4) {
    img_facebook.setAttribute(
      "src",
      "images/icons/1269920_facebook_letter_social_social media_icon.png"
    );
  } else {
    img_twitter.setAttribute(
      "src",
      "images/icons/5305170_bird_social media_social network_tweet_twitter_icon.png"
    );
  }
}
