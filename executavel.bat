for %%a in (*.png) do (
ffmpeg -i "%%a" -vf scale=500:500 -pix_fmt yuva420p -quality 80 -q:v 100 "%%~na.webp"
del "%%a"
)

setlocal enabledelayedexpansion
set i=1
for %%a in (*.webp) do (
ren "%%a" "%1-!i!.webp"
set /a i+=1
)
echo  Seu cu foi passado pro meu nome com Sucesso!
