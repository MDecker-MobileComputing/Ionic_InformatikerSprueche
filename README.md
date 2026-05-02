# Ionic/Angular: Demo-App "Informatiker-Zitate" für i18n #

<br>

Dieses Repository enthält eine Angular-basierte Ionic-App, die einige Zitate aus dem Bereich der Informatik anzeigt.
Diese Zitate sowie die wenigen anderen Texte in der App sind ins Deutsche und Englische übersetzt, wobei Letzteres die Standardsprache ist.
Für die übersetzbaren Texte wird Angulars Übersetzungsbibliothek [ngx-translate](https://www.npmjs.com/package/@ngx-translate/core) verwendet.

<br>

----

## Implementation Details ##

<br>

Die englischen Texte befinden sich in der Datei [src/assets/i18n/en.json](src/assets/i18n/en.json),
die deutschen Texte befinden sich in der Datei [src/assets/i18n/de.json](src/assets/i18n/de.json).

Die Übersetzung wurde gemäß folgendem Artikel implementiert:
https://phrase.com/blog/posts/localizing-ionic-applications-with-ngx-translate/

Zunächst müssen die folgenden NPM-Module zum Ionic-Projekt hinzugefügt werden:
```
npm install @ngx-translate/core @ngx-translate/http-loader --save
```

Um die Übersetzung in der Ionic-App zu aktivieren, sind einige Änderungen in den Dateien
[src/app/app.component.ts](src/app/app.component.ts) erforderlich, um die Standardsprache festzulegen
(`ngx-translate` ist für Angular gedacht, also nicht Ionic-spezifisch).

In HTML-Dateien kann ein übersetzter Text über die `translate`-Pipe referenziert werden:
```
{{ "key_for_text" | translate }}
```


Damit die `translate`-Pipe in einer HTML-Datei verwendet werden kann, muss die Klasse `TranslateModule`
in der entsprechenden `.module.ts`-Datei für jede Seite exportiert werden, auf der diese Pipe genutzt wird,
zum Beispiel in der Datei [src/app/home/home.module.ts](src/app/home/home.module.ts).

<br>

----

## License ##

<br>

See the [LICENSE file](LICENSE.md) for license rights and limitations (BSD 3-Clause License) for the files in this repository.

<br>
