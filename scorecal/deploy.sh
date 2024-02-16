# echo "swtching to branch master "
# git checkout master 

echo "building app..."
npm run build

echo "deploying app to server..."
scp -r dist/* david@45.79.145.23:/var/www/45.79.145.23/

echo "done!"