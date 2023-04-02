>It will change all files inside your folder resizing them to 500px.


## png to webp
```for %a in (*.png) do ffmpeg -i "%a" -vf scale=500:500 -pix_fmt yuva420p -quality 80 -q:v 100 "%~na.webp"```

## png to jpg
```for %a in (*.png) do ffmpeg -i "%a" -vf scale=500:500 -pix_fmt yuv420p -quality 80 -q:v 100 "%~na.jpg"```

##  jpg para jpg 
```for %a in (*.jpg) do ffmpeg -i "%a" -vf scale=500:500 -q:v 2 "%~na_resized.jpg"```

##  png to png 
```for %a in (*.png) do ffmpeg -i "%a" -vf scale=500:500 -q:v 2 "%~na.png"```