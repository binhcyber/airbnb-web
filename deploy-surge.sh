# Build React app with production mode
npm run build
# Move to build folder
cd build
# Clone index.html into 200.html
cp index.html 200.html
# start deploy 
surge . airbnb-clone-web.surge.sh