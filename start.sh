LOCAL_IP=$(ipconfig getifaddr en0)
LOCAL_PORT=4200

npx localview --port $LOCAL_PORT
ng serve --port $LOCAL_PORT --host $LOCAL_IP