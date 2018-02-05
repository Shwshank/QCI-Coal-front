#!/bin/bash

TIMESTAMP=`TZ=IST-5:30 date +%F-%H%M`

GITHUB_LINK="https://github.com/Shwshank/QCI-Coal-front.git"

DOCKERNAME="Coal-Frontend-V2"

IMAGENAME="qci-coal-front-v2"

REPONAME="coal-frontend-pipeline-V2"

# git clone $GITHUB_LINK

# mv /var/lib/jenkins/workspace/coal-frontend-V2/dist/ /home/ubuntu/dist_backups/coal-V2/dist_$TIMESTAMP

# mv /var/lib/jenkins/workspace/coal-frontend-pipeline-V2/dist /var/lib/jenkins/workspace/coal-frontend-V2/

# docker stop $DOCKERNAME

# docker rm $DOCKERNAME

# docker rmi $IMAGENAME

docker build -t $IMAGENAME /var/lib/jenkins/workspace/coal-frontend-V2/.

docker run -dt --name $DOCKERNAME $IMAGENAME
