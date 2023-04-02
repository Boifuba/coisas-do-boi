>It will change all files inside your folder.


## Convert png to webp
```for %a in (*.png) do ffmpeg -i "%a" -vf scale=500:500 -pix_fmt yuva420p -quality 80 -q:v 100 "%~na.webp"```

## Convert png to jpg
```for %a in (*.png) do ffmpeg -i "%a" -vf scale=500:500 -pix_fmt yuv420p -quality 80 -q:v 100 "%~na.jpg"```

## Convert jpg para jpg 

```for %a in (*.jpg) do ffmpeg -i "%a" -vf scale=500:500 -q:v 2 "%~na_resized.jpg"```

## Convert png to png 
```for %a in (*.png) do ffmpeg -i "%a" -vf scale=500:500 -q:v 2 "%~na.png"```