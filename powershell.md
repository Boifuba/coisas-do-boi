# Batch to rename files
```powershell
setlocal enabledelayedexpansion
set i=1
for %%a in (*.png) do (
    ren "%%a" "cyberpunk-!i!.png"
    set /a i+=1
)
```