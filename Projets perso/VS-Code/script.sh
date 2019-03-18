echo Entrer \"Linux\" ou \"Windows\"
read os
cat settings.json | egrep "$os|[\{\}]"
