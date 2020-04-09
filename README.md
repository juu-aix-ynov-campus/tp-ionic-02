# TP IONIC 02
###### From _ionic blank starter_
![Angular CI](https://github.com/juu-aix-ynov-campus/tp-ionic-02/workflows/Angular%20CI/badge.svg?branch=master)
#### Notation

- CI:
    - Cache :white_check_mark:
    - Build :white_check_mark:
    - Units Tests :white_check_mark:
    - Readme with Github Actions Badges :white_check_mark:

- Angular:
    - [Http Get Request](https://angular.io/guide/http) :white_check_mark:
    - Units Tests with HttpClientTestingModule :white_check_mark:
    - [Using Observable and Pipe Operator](https://www.learnrxjs.io/) :white_check_mark:
    
- Ionic:
    - [Ionic UI Components](https://ionicframework.com/docs/components) :white_check_mark:
    - [Ionic Native](https://ionicframework.com/docs/native) *onglet Community* :white_check_mark:
        - Camera *fait en cours*
        - Geolocation *à faire*
    - Android local Build :white_check_mark:

#### Scripts pour build Android

- Ajout de la plateforme Android `ionic cordova platform add android` (à ne faire qu'une fois en local)
- Build `ionic cordova build android --prod --release`
- MAJ des fichiers Angular dans le projet Android Studio `ionic cordova prepare android --prod --no-build`
- Emule le projet sur un device `ionic cordova emulate android --prod`
- Liste des prérequis pour Android `ionic cordova requirements android`

#### Debug depuis l'AVD

- Dans Google Chrome `chrome://inspect`
- Une catégorie *AOSP on IA Emulator* s'affiche, avec votre device et le bouton __inspect__
