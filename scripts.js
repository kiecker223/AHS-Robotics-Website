function parseYoutubeUrl(url)
{
    var delpoint = url.indexOf('=');
    url.slice(0, delpoint);
    return url;
}

function createPlayer(url, width, height)
{
    var str = parseYoutubeUrl(url);
    
    return new YT.Player
    ( 'player', {
        height: height.toString(),
        width: width.toString(),
        videoID: str,
        events : 
        {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function LoadVideo(url, iframeTag, width, height)
{
    var tag = document.getElementById(iframeTag);
    tag.src = "https://www.youtube.com/iframe_api";
    
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    var player = createPlayer(url, width, height);
}