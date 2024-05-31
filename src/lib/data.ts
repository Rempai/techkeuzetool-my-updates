type Source = {
  name: string;
  url: string;
};

type Category = {
  name: string;
  description: string;
  color: string;
  children?: Array<Category>;
  sources?: Array<Source>;
  info?: string;
  icon?: string;
  iconColor?: string;
  image?: string;
};

export const categories: Array<Category> = [
  {
    name: "Design",
    description:
      "Het design is het opmaak van je product. Dit is was de eindgebruiker te zien krijgt",
    color: "bg-red-500",
    icon: "brush-outline",
    iconColor: "text-red-800",
    children: [
      {
        name: "Graphic Design",
        description: "",
        color: "bg-green-500",
        children: [
          {
            name: "Illustrator",
            description: " ",
            color: "bg-green-700",
            image:
              "https://en.wikipedia.org/wiki/Adobe_Illustrator#/media/File:Adobe_Illustrator_CC_icon.svg",
            sources: [
              {
                name: "Adobe Illustrator FAQ",
                url: "https://helpx.adobe.com/illustrator/faq.html",
              },
              {
                name: "Adobe Illustrator for Beginners | FREE COURSE",
                url: "https://www.youtube.com/watch?v=Ib8UBwu3yGA",
              },
            ],
            info:
              "<h1>Illustrator</h1>" +
              "<br>" +
              "<p>Adobe Illustrator is een vectorgrafieksysteem ontwikkeld door Adobe Systems. Het wordt veel gebruikt voor het creëren van vectorafbeeldingen, zoals logo's, pictogrammen, tekeningen, typografie en andere illustraties. Met Illustrator kunnen gebruikers afbeeldingen maken die onbeperkt schaalbaar zijn zonder kwaliteitsverlies, wat het bijzonder geschikt maakt voor grafisch ontwerp en illustratiewerk. Het programma biedt een breed scala aan tools en functies om creatieve expressie mogelijk te maken</p>" +
              "<br>" +
              "<p><h1>Voordelen van het gebruik van Adobe Illustrator:</h1>" +
              "    <ol>" +
              "        <li><strong>Vectorafbeeldingen:</strong> Illustrator is gespecialiseerd in vectorafbeeldingen, waardoor illustraties en ontwerpen eenvoudig schaalbaar zijn zonder verlies van kwaliteit.</li>" +
              "        <li><strong>Geavanceerde typografie:</strong> Illustrator biedt uitgebreide typografische tools voor gedetailleerde ontwerpen en tekstbewerking.</li>" +
              "        <li><strong>Veelzijdigheid:</strong> Geschikt voor een breed scala aan ontwerptaken.</li>" +
              "        <li><strong>Integratie met andere Adobe-producten:</strong> Naadloze integratie met software zoals Photoshop en InDesign.</li>" +
              "        <li><strong>Uitgebreide toolset:</strong> Bevat een uitgebreide set tools en functies voor complexe ontwerpen.</li>" +
              "    </ol><br>" +
              "    <h1>Nadelen van het gebruik van Adobe Illustrator:</h1>" +
              "    <ul>" +
              "        <li><strong>Leercurve:</strong> Steile leercurve voor beginners.</li>" +
              "        <li><strong>Kosten:</strong> Onderdeel van Adobe Creative Cloud, een betaalde abonnementsservice.</li>" +
              "        <li><strong>Zwaar voor systeembronnen:</strong> Vereist aanzienlijke systeembronnen, vooral bij complexe illustraties.</li>" +
              "        <li><strong>Niet ideaal voor foto's:</strong> Minder geschikt voor fotobewerkingstaken in vergelijking met Adobe Photoshop.</li>" +
              "        <li><strong>Bestandsgrootte:</strong> Bestanden kunnen groot worden, wat opslagproblemen kan veroorzaken.</li>" +
              "    </ul></p>",
          },
          {
            name: "Photoshop",
            description: " ",
            color: "bg-green-700",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/1200px-Adobe_Photoshop_CC_icon.svg.png",
            sources: [
              {
                name: "Adobe Photoshop FAQ",
                url: "https://helpx.adobe.com/photoshop/faq.html",
              },
              {
                name: "Adobe Photoshop for Beginners | FREE COURSE",
                url: "https://www.youtube.com/watch?v=IyR_uYsRdPs",
              },
            ],
            info:
              "<h1>Photoshop</h1>" +
              "<br>" +
              "<h1>Wat is Photoshop?</h1>" +
              "    <p>Photoshop is een grafisch bewerkingsprogramma ontwikkeld door Adobe Systems. Het is een krachtige softwaretoepassing waarmee gebruikers digitale afbeeldingen kunnen bewerken, manipuleren, retoucheren en componeren. Photoshop wordt vaak gebruikt door professionals in de grafische en fotografische industrie, maar ook door hobbyisten die hun foto's willen verbeteren of creatieve projecten willen maken.</p>" +
              "<br>" +
              "    <p>Enkele kenmerken van Photoshop zijn onder andere geavanceerde tools voor beeldbewerking, lagen voor complexe compositie, filters voor speciale effecten, en aanpassingslagen voor het bewerken van kleur en belichting. Het programma ondersteunt zowel rasterafbeeldingen als enkele vectorfuncties, maar het is met name sterk in het werken met pixelgebaseerde afbeeldingen.</p>" +
              "<br>" +
              "    <p>Photoshop is een veelzijdig instrument dat wordt gebruikt voor taken zoals fotoherstel, retoucheren van portretten, het maken van digitale illustraties, en het ontwerpen van webpagina's. Het maakt deel uit van de Adobe Creative Cloud-suite, wat betekent dat het samenwerkt met andere Adobe-software zoals Illustrator en InDesign.</p><br>" +
              "<h1>Voordelen van het gebruik van Adobe Photoshop:</h1>\n" +
              "    <ol>\n" +
              "        <li><strong>Geavanceerde beeldbewerkingstools:</strong> Photoshop biedt krachtige tools voor het bewerken, manipuleren en retoucheren van digitale afbeeldingen.</li>\n" +
              "        <li><strong>Compositiemogelijkheden:</strong> Het ondersteunt lagen voor complexe compositie en het samenvoegen van verschillende elementen in één beeld.</li>\n" +
              "        <li><strong>Speciale effecten:</strong> Photoshop heeft een breed scala aan filters en effecten voor het creëren van artistieke en visueel aantrekkelijke resultaten.</li>\n" +
              "        <li><strong>Kleurcorrectie en aanpassingen:</strong> Het biedt uitgebreide mogelijkheden voor het aanpassen van kleur, belichting en andere beeldkenmerken.</li>\n" +
              "        <li><strong>Integratie met andere Adobe-producten:</strong> Naadloze integratie met software zoals Illustrator en InDesign binnen de Adobe Creative Cloud.</li>\n" +
              "    </ol>\n" +
              "<br>" +
              "    <h1>Nadelen van het gebruik van Adobe Photoshop:</h1>\n" +
              "    <ul>\n" +
              "        <li><strong>Steile leercurve:</strong> Voor beginners kan Photoshop complex zijn vanwege de vele functies en mogelijkheden.</li>\n" +
              "        <li><strong>Kosten:</strong> Photoshop is onderdeel van Adobe Creative Cloud, een betaalde abonnementsservice.</li>\n" +
              "        <li><strong>Zwaar voor systeembronnen:</strong> Het kan veeleisend zijn voor de systeembronnen, vooral bij het verwerken van grote bestanden of complexe ontwerpen.</li>\n" +
              "        <li><strong>Overkill voor eenvoudige taken:</strong> Voor eenvoudige taken kan Photoshop te krachtig zijn, en eenvoudigere tools kunnen meer geschikt zijn.</li>\n" +
              "        <li><strong>Pixelgebaseerd:</strong> Photoshop is voornamelijk gericht op pixelgebaseerde afbeeldingen en is mogelijk minder geschikt voor strikt vectorwerk.</li>\n" +
              "    </ul>",
          },
          {
            name: "InDesign",
            description: " ",
            color: "bg-green-700",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/180px-Adobe_InDesign_CC_icon.svg.png",
            sources: [
              {
                name: "Adobe Indesign FAQ",
                url: "https://helpx.adobe.com/indesign/faq.html",
              },
              {
                name: "Adobe Indesign for Beginners | FREE COURSE",
                url: "https://www.youtube.com/watch?v=RXRT3dHu6_o",
              },
            ],
            info:
              "<h1>Indesign</h1>" +
              "<br>" +
              "<h1>Wat is Indesign?</h1><br>" +
              "<p>Adobe InDesign is een desktop publishing-softwareprogramma ontwikkeld door Adobe Systems. Het wordt veel gebruikt door grafisch ontwerpers, uitgevers en professionals in de printindustrie voor het maken van lay-outs voor drukwerk en digitale media. InDesign stelt gebruikers in staat om complexe documenten te ontwerpen, zoals tijdschriften, brochures, posters, boeken en interactieve PDF's.</p>" +
              "<p>Enkele kenmerken van Adobe InDesign zijn onder andere de mogelijkheid om met meerdere pagina's te werken, ondersteuning voor tekst- en beeldelementen, nauwkeurige typografiecontrole, en de mogelijkheid om stijlen en sjablonen te gebruiken voor consistente lay-outs. Het programma integreert ook goed met andere Adobe-software, zoals Photoshop en Illustrator, waardoor een naadloze workflow ontstaat binnen de Adobe Creative Cloud.</p>" +
              "<p>InDesign is bijzonder geschikt voor projecten waarbij nauwkeurige lay-outcontrole en professionele typografie essentieel zijn. Het biedt krachtige tools voor het beheren van tekst en afbeeldingen op een pagina, waardoor gebruikers een hoge mate van creatieve vrijheid hebben bij het samenstellen van complexe documenten.</p>" +
              "<br><p><h1>Voordelen van het gebruik van Adobe InDesign:</h1>\n" +
              "    <ol>\n" +
              "        <li><strong>Professionele lay-outcontrole:</strong> InDesign is ontworpen voor het creëren van complexe lay-outs, waardoor het ideaal is voor drukwerk zoals tijdschriften, brochures en boeken.</li>\n" +
              "        <li><strong>Werken met meerdere pagina's:</strong> Het ondersteunt het beheren van documenten met meerdere pagina's, waardoor het geschikt is voor uitgebreide publicaties.</li>\n" +
              "        <li><strong>Nauwkeurige typografie:</strong> InDesign biedt uitgebreide controle over typografie, waardoor gebruikers professionele en consistente tekstopmaak kunnen realiseren.</li>\n" +
              "        <li><strong>Integratie met Adobe-software:</strong> Het integreert naadloos met andere Adobe-software, zoals Photoshop en Illustrator, voor een efficiënte workflow binnen de Adobe Creative Cloud.</li>\n" +
              "        <li><strong>Stijlen en sjablonen:</strong> Gebruikers kunnen stijlen en sjablonen gebruiken voor consistente lay-outs en gemakkelijk hergebruik van ontwerpelementen.</li>\n" +
              "    </ol>\n" +
              "<br>" +
              "    <h1>Nadelen van het gebruik van Adobe InDesign:</h1>\n" +
              "    <ul>\n" +
              "        <li><strong>Steile leercurve:</strong> Voor beginners kan InDesign complex zijn vanwege de uitgebreide functionaliteit.</li>\n" +
              "        <li><strong>Kosten:</strong> InDesign maakt deel uit van Adobe Creative Cloud, wat een betaalde abonnementsservice is.</li>\n" +
              "        <li><strong>Overkill voor eenvoudige projecten:</strong> Voor eenvoudige lay-outs kunnen eenvoudigere tools meer geschikt zijn, en InDesign kan als overweldigend worden ervaren.</li>\n" +
              "        <li><strong>Zwaar voor systeembronnen:</strong> Bij het werken met grote documenten kan InDesign veeleisend zijn voor systeembronnen.</li>\n" +
              "        <li><strong>Minder geschikt voor beeldbewerking:</strong> Voor diepgaande beeldbewerkingstaken zijn specifieke grafische programma's zoals Photoshop meer geschikt.</li>\n" +
              "    </ul></p>",
          },
        ],
      },
      {
        name: "Web Design",
        description: "",
        color: "bg-blue-500",
        children: [
          {
            name: "Figma",
            description: " ",
            color: "bg-blue-500",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/96px-Figma-logo.svg.png",
            sources: [
              {
                name: "Complete Website Figma tutorial",
                url: "https://www.youtube.com/watch?v=HZuk6Wkx_Eg",
              },
            ],
            info:
              "<h1>Figma</h1>" +
              "<br>" +
              "<h1>Wat is Figma?</h1><br>" +
              "<p>Figma is een grafisch ontwerp- en samenwerkingsinstrument dat wordt gebruikt voor het maken van digitale ontwerpen, prototypen en gebruikersinterfaces. Het is een cloudgebaseerde applicatie waarmee teams in real-time kunnen samenwerken aan ontwerpprojecten, ongeacht hun locatie. Figma is populair onder ontwerpers en teams die op afstand werken vanwege de mogelijkheid om gelijktijdig aan ontwerpen te werken en wijzigingen direct te zien.</p>" +
              "<br>" +
              "<p>Enkele kenmerken van Figma zijn onder andere de mogelijkheid om zowel op desktop als in de browser te werken, het creëren van interactieve prototypes, het delen van ontwerpen met anderen via links, en de mogelijkheid om ontwerpen te inspecteren en te exporteren voor ontwikkeling. Het platform is veelzijdig en wordt vaak gebruikt voor het ontwerpen van websites, mobiele apps en andere digitale interfaces.</p>" +
              "<br>" +
              "<p>Figma heeft de mogelijkheid om ontwerpelementen te organiseren in componenten en bibliotheken, waardoor hergebruik en consistentie in het ontwerpproces worden vergemakkelijkt. Het is een populaire keuze vanwege zijn gebruiksgemak, samenwerkingsmogelijkheden en de mogelijkheid om ontwerpen te presenteren aan belanghebbenden.</p>" +
              "<br>" +
              "<p><h1>Voordelen van het gebruik van Figma:</h1>\n" +
              "    <ol>\n" +
              "        <li><strong>Cloudgebaseerde samenwerking:</strong> Figma maakt real-time samenwerking mogelijk, waardoor teams gelijktijdig aan ontwerpprojecten kunnen werken, ongeacht hun locatie.</li>\n" +
              "        <li><strong>Platformonafhankelijk:</strong> Het is mogelijk om zowel op desktop als in de browser met Figma te werken, wat flexibiliteit biedt aan gebruikers.</li>\n" +
              "        <li><strong>Interactieve prototyping:</strong> Figma stelt gebruikers in staat om interactieve prototypes te maken, waardoor ze de gebruikerservaring kunnen simuleren en testen.</li>\n" +
              "        <li><strong>Delen en presenteren:</strong> Ontwerpen kunnen eenvoudig worden gedeeld via links, en het platform biedt tools voor het presenteren van ontwerpen aan belanghebbenden.</li>\n" +
              "        <li><strong>Componenten en bibliotheken:</strong> Figma ondersteunt het organiseren van ontwerpelementen in componenten en bibliotheken, wat hergebruik en consistentie bevordert.</li>\n" +
              "    </ol>\n" +
              "<br>" +
              "    <h1>Nadelen van het gebruik van Figma:</h1>\n" +
              "    <ul>\n" +
              "        <li><strong>Internetverbinding vereist:</strong> Omdat Figma een cloudgebaseerde service is, is een stabiele internetverbinding vereist voor effectief gebruik.</li>\n" +
              "        <li><strong>Leercurve:</strong> Voor nieuwe gebruikers kan Figma een leercurve hebben, vooral voor degenen die niet bekend zijn met cloudgebaseerde ontwerptools.</li>\n" +
              "        <li><strong>Beperkte offline functionaliteit:</strong> Het werken zonder internetverbinding kan beperkt zijn, omdat Figma primair gericht is op online samenwerking.</li>\n" +
              "        <li><strong>Prijsmodel:</strong> Hoewel Figma een gratis versie heeft, zijn bepaalde geavanceerde functies beschikbaar in betaalde abonnementen, wat een overweging kan zijn voor budgetbeperkingen.</li>\n" +
              "        <li><strong>Privacyzorgen:</strong> Het opslaan van ontwerpen in de cloud kan privacyzorgen opleveren, vooral voor projecten met gevoelige informatie.</li>\n" +
              "    </ul></p>",
          },
        ],
      },
      {
        name: "User Experience Design",
        description: "",
        color: "bg-yellow-500",
        children: [
          {
            name: "Figma",
            description: " ",
            color: "bg-yellow-500",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/96px-Figma-logo.svg.png",
            sources: [
              {
                name: "Complete Website Figma tutorial",
                url: "https://www.youtube.com/watch?v=HZuk6Wkx_Eg",
              },
            ],
            info:
              "<h1>Figma</h1>" +
              "<br>" +
              "<h1>Wat is Figma?</h1><br>" +
              "<p>Figma is een grafisch ontwerp- en samenwerkingsinstrument dat wordt gebruikt voor het maken van digitale ontwerpen, prototypen en gebruikersinterfaces. Het is een cloudgebaseerde applicatie waarmee teams in real-time kunnen samenwerken aan ontwerpprojecten, ongeacht hun locatie. Figma is populair onder ontwerpers en teams die op afstand werken vanwege de mogelijkheid om gelijktijdig aan ontwerpen te werken en wijzigingen direct te zien.</p>" +
              "<br>" +
              "<p>Enkele kenmerken van Figma zijn onder andere de mogelijkheid om zowel op desktop als in de browser te werken, het creëren van interactieve prototypes, het delen van ontwerpen met anderen via links, en de mogelijkheid om ontwerpen te inspecteren en te exporteren voor ontwikkeling. Het platform is veelzijdig en wordt vaak gebruikt voor het ontwerpen van websites, mobiele apps en andere digitale interfaces.</p>" +
              "<br>" +
              "<p>Figma heeft de mogelijkheid om ontwerpelementen te organiseren in componenten en bibliotheken, waardoor hergebruik en consistentie in het ontwerpproces worden vergemakkelijkt. Het is een populaire keuze vanwege zijn gebruiksgemak, samenwerkingsmogelijkheden en de mogelijkheid om ontwerpen te presenteren aan belanghebbenden.</p>" +
              "<br>" +
              "<p><h1>Voordelen van het gebruik van Figma:</h1>\n" +
              "    <ol>\n" +
              "        <li><strong>Cloudgebaseerde samenwerking:</strong> Figma maakt real-time samenwerking mogelijk, waardoor teams gelijktijdig aan ontwerpprojecten kunnen werken, ongeacht hun locatie.</li>\n" +
              "        <li><strong>Platformonafhankelijk:</strong> Het is mogelijk om zowel op desktop als in de browser met Figma te werken, wat flexibiliteit biedt aan gebruikers.</li>\n" +
              "        <li><strong>Interactieve prototyping:</strong> Figma stelt gebruikers in staat om interactieve prototypes te maken, waardoor ze de gebruikerservaring kunnen simuleren en testen.</li>\n" +
              "        <li><strong>Delen en presenteren:</strong> Ontwerpen kunnen eenvoudig worden gedeeld via links, en het platform biedt tools voor het presenteren van ontwerpen aan belanghebbenden.</li>\n" +
              "        <li><strong>Componenten en bibliotheken:</strong> Figma ondersteunt het organiseren van ontwerpelementen in componenten en bibliotheken, wat hergebruik en consistentie bevordert.</li>\n" +
              "    </ol>\n" +
              "<br>" +
              "    <h1>Nadelen van het gebruik van Figma:</h1>\n" +
              "    <ul>\n" +
              "        <li><strong>Internetverbinding vereist:</strong> Omdat Figma een cloudgebaseerde service is, is een stabiele internetverbinding vereist voor effectief gebruik.</li>\n" +
              "        <li><strong>Leercurve:</strong> Voor nieuwe gebruikers kan Figma een leercurve hebben, vooral voor degenen die niet bekend zijn met cloudgebaseerde ontwerptools.</li>\n" +
              "        <li><strong>Beperkte offline functionaliteit:</strong> Het werken zonder internetverbinding kan beperkt zijn, omdat Figma primair gericht is op online samenwerking.</li>\n" +
              "        <li><strong>Prijsmodel:</strong> Hoewel Figma een gratis versie heeft, zijn bepaalde geavanceerde functies beschikbaar in betaalde abonnementen, wat een overweging kan zijn voor budgetbeperkingen.</li>\n" +
              "        <li><strong>Privacyzorgen:</strong> Het opslaan van ontwerpen in de cloud kan privacyzorgen opleveren, vooral voor projecten met gevoelige informatie.</li>\n" +
              "    </ul></p>",
          },
        ],
      },
      {
        name: "Animation",
        description: "",
        color: "bg-purple-500",
        children: [
          {
            name: "After Effects",
            description: " ",
            color: "bg-purple-500",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Adobe_After_Effects_CC_icon.svg/180px-Adobe_After_Effects_CC_icon.svg.png",
            sources: [
              {
                name: "After Effects tutorial playlist",
                url: "https://www.youtube.com/playlist?list=PLYfCBK8IplO77FDDLnS06qEMoVLD7Qyib",
              },
            ],
            info:
              "<h1>After Effects</h1>" +
              "<br>" +
              "<h1>Wat is After Effects?</h1><br>" +
              "<p>Adobe After Effects is een softwareprogramma voor visuele effecten en bewegende beelden dat wordt ontwikkeld door Adobe Systems. Het is een krachtig programma dat veel wordt gebruikt in de film-, televisie- en webindustrie voor het maken van indrukwekkende visuele effecten, animaties en bewegende grafische elementen.</p>" +
              "<p>After Effects is speciaal ontworpen voor het toevoegen van dynamische beweging en visuele flair aan video's en animaties. Het stelt gebruikers in staat om complexe bewegingsgrafieken, speciale effecten en geavanceerde visuele composities te maken. Het programma integreert goed met andere Adobe-software, zoals Adobe Premiere Pro voor videobewerking en Adobe Illustrator voor het werken met vectorgrafieken.</p>" +
              "<p>Enkele kenmerken van Adobe After Effects zijn onder andere keyframe-animatie, geavanceerde trackingmogelijkheden, 3D-compositing, effectenbibliotheken en de mogelijkheid om met verschillende videoformaten te werken. Het wordt vaak gebruikt voor het maken van titelsequenties, bewegende grafieken, speciale effecten en zelfs gehele animatiefilms.</p><br>" +
              "<h1>Voordelen van het gebruik van Adobe After Effects:</h1>\n" +
              "    <ol>\n" +
              "        <li><strong>Geavanceerde visuele effecten:</strong> After Effects biedt krachtige tools voor het creëren van indrukwekkende visuele effecten en animaties.</li>\n" +
              "        <li><strong>Keyframe-animatie:</strong> Gebruikers kunnen gedetailleerde bewegingsgrafieken maken door keyframes te gebruiken voor positionering, schaling, rotatie en andere eigenschappen.</li>\n" +
              "        <li><strong>3D-compositing:</strong> Het programma ondersteunt 3D-compositing, waardoor gebruikers driedimensionale elementen aan hun projecten kunnen toevoegen.</li>\n" +
              "        <li><strong>Integratie met andere Adobe-software:</strong> After Effects integreert naadloos met andere Adobe-producten, zoals Adobe Premiere Pro en Adobe Illustrator.</li>\n" +
              "        <li><strong>Uitgebreide effectenbibliotheek:</strong> Er is een breed scala aan ingebouwde effecten beschikbaar, waardoor gebruikers creatieve vrijheid hebben bij het vormgeven van hun projecten.</li>\n" +
              "    </ol>\n" +
              "<br>" +
              "    <h1>Nadelen van het gebruik van Adobe After Effects:</h1>\n" +
              "    <ul>\n" +
              "        <li><strong>Steile leercurve:</strong> Voor beginners kan After Effects complex zijn vanwege de geavanceerde functies en mogelijkheden.</li>\n" +
              "        <li><strong>Zwaar voor systeembronnen:</strong> Het programma kan veeleisend zijn voor de systeembronnen, vooral bij het werken met complexe projecten en grote bestanden.</li>\n" +
              "        <li><strong>Prijs:</strong> Adobe After Effects maakt deel uit van Adobe Creative Cloud, wat een betaalde abonnementsservice is.</li>\n" +
              "        <li><strong>Specifiek voor visuele effecten:</strong> Het is gericht op visuele effecten en bewegende beelden, en is mogelijk niet de beste keuze voor algemene videobewerkingstaken.</li>\n" +
              "        <li><strong>Renderen kan tijdrovend zijn:</strong> Het renderen van complexe animaties kan veel tijd in beslag nemen, vooral op minder krachtige computers.</li>\n" +
              "    </ul>",
          },
          {
            name: "Premiere Pro",
            description: " ",
            color: "bg-purple-500",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Adobe_Premiere_Pro_CC_icon.svg/180px-Adobe_Premiere_Pro_CC_icon.svg.png",
            sources: [
              {
                name: "Premier Pro Masterclass",
                url: "https://www.youtube.com/watch?v=8eDsvKwM40U",
              },
            ],
            info:
              "<h1>Premier Pro</h1>" +
              "<br>" +
              "<h1>Wat is Premier Pro?</h1><br>" +
              "<p>Adobe Premiere Pro is een professionele videobewerkingssoftware ontwikkeld door Adobe Systems. Het is een krachtig programma dat veel wordt gebruikt in de film-, televisie- en videoproductie-industrie. Premiere Pro is ontworpen om videobewerkingsprojecten van elke omvang aan te kunnen, van korte films tot lange speelfilms.</p>" +
              "<p>Met Adobe Premiere Pro kunnen gebruikers videobeelden bewerken, monteren en verbeteren. Het biedt een uitgebreide set tools en functies waarmee videobewerkers creatief kunnen zijn in het samenstellen van hun projecten. Premiere Pro integreert ook naadloos met andere Adobe-software, zoals After Effects voor visuele effecten en Adobe Audition voor audiobewerking.</p>" +
              "<p>Enkele kenmerken van Adobe Premiere Pro zijn onder andere ondersteuning voor verschillende videoformaten, geavanceerde kleurcorrectie, audiobewerkingstools, multi-cam editing, en de mogelijkheid om rechtstreeks vanuit de software video's te exporteren naar verschillende platforms.</p>" +
              "<p>Premiere Pro is populair vanwege zijn professionele mogelijkheden en flexibiliteit, waardoor het een favoriete keuze is voor videobewerkers die streven naar hoogwaardige producties.</p><br>" +
              "<h1>Voordelen van het gebruik van Adobe Premiere Pro:</h1>\n" +
              "    <ol>\n" +
              "        <li><strong>Professionele videobewerking:</strong> Premiere Pro is een krachtige software voor professionele videobewerking, geschikt voor projecten van elke omvang.</li>\n" +
              "        <li><strong>Integratie met Adobe-software:</strong> Naadloze integratie met andere Adobe-producten, zoals After Effects en Audition, voor een complete productieworkflow.</li>\n" +
              "        <li><strong>Ondersteuning voor verschillende videoformaten:</strong> Het programma biedt brede compatibiliteit en ondersteuning voor diverse videoformaten en resoluties.</li>\n" +
              "        <li><strong>Geavanceerde kleurcorrectie:</strong> Premiere Pro bevat krachtige tools voor kleurcorrectie en kleurgradatie, waardoor gebruikers de visuele esthetiek van hun video's kunnen verbeteren.</li>\n" +
              "        <li><strong>Multi-cam editing:</strong> Handige functies voor het bewerken van meerdere camerahoeken in realtime.</li>\n" +
              "    </ol>\n" +
              "<br>" +
              "    <h1>Nadelen van het gebruik van Adobe Premiere Pro:</h1>\n" +
              "    <ul>\n" +
              "        <li><strong>Steile leercurve:</strong> Voor beginners kan Premiere Pro complex zijn vanwege de uitgebreide functies en mogelijkheden.</li>\n" +
              "        <li><strong>Prijs:</strong> Premiere Pro maakt deel uit van Adobe Creative Cloud, wat een betaalde abonnementsservice is.</li>\n" +
              "        <li><strong>Zwaar voor systeembronnen:</strong> Het programma kan veeleisend zijn voor de systeembronnen, vooral bij het werken met grote videobestanden.</li>\n" +
              "        <li><strong>Specifieke hardwarevereisten:</strong> Voor optimale prestaties zijn krachtige computers en specifieke grafische kaarten vereist.</li>\n" +
              "        <li><strong>Continue updates:</strong> Regelmatige updates kunnen voor sommige gebruikers als overweldigend worden ervaren.</li>\n" +
              "    </ul>",
          },
          {
            name: "Blender",
            description: " ",
            color: "bg-purple-500",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_Blender.svg/300px-Logo_Blender.svg.png",
            sources: [
              {
                name: "Blender tutorial playlist",
                url: "https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD",
              },
            ],
            info:
              "<h1>Blender</h1>" +
              "<br>" +
              "<h1>Wat is Blender?</h1><br>" +
              "<p>Blender is een gratis en open-source 3D computer graphics-softwarepakket dat wordt gebruikt voor het modelleren, animeren, renderen, compositen en bewerken van video's. Het is ontwikkeld door de Blender Foundation en wordt wereldwijd veel gebruikt door 3D-artiesten, animatoren, game-ontwikkelaars en filmmakers.</p>" +
              "<p>Blender biedt een uitgebreid scala aan functies, waaronder 3D-modellering, sculpting, texturing, rigging (het toewijzen van virtuele botten aan 3D-modellen), animatie en simulatie van fysica, zoals vloeistoffen en rook. Daarnaast heeft Blender een ingebouwd videosnij- en bewerkingsgereedschap, wat het tot een veelzijdige tool maakt voor het hele productieproces.</p>" +
              "<p>Een opvallend kenmerk van Blender is dat het een actieve en betrokken gemeenschap heeft die regelmatig bijdraagt aan de ontwikkeling van de software. Door zijn open-source karakter is Blender beschikbaar voor verschillende besturingssystemen, waaronder Windows, macOS en Linux.</p>" +
              "<p>Kortom, Blender is een krachtige en toegankelijke 3D-software die creatieve professionals en enthousiaste beginners de mogelijkheid biedt om hoogwaardige 3D-content te creëren.</p><br>" +
              "<h1>Voordelen van het gebruik van Blender:</h1>\n" +
              "    <ol>\n" +
              "        <li><strong>Gratis en open-source:</strong> Blender is gratis te gebruiken en biedt volledige toegang tot de broncode, waardoor het voor iedereen beschikbaar en aanpasbaar is.</li>\n" +
              "        <li><strong>Brede functionaliteit:</strong> Het omvat een uitgebreid scala aan functies voor 3D-modellering, animatie, texturing, rendering en videobewerking.</li>\n" +
              "        <li><strong>Aktieve gemeenschap:</strong> Blender heeft een actieve en betrokken gemeenschap van gebruikers en ontwikkelaars die bijdragen aan de voortdurende verbetering van de software.</li>\n" +
              "        <li><strong>Multiplatform:</strong> Beschikbaar voor Windows, macOS en Linux, waardoor het toegankelijk is op verschillende besturingssystemen.</li>\n" +
              "        <li><strong>Continue ontwikkeling:</strong> Blender wordt regelmatig bijgewerkt met nieuwe functies en verbeteringen.</li>\n" +
              "    </ol>\n" +
              "<br>" +
              "    <h1>Nadelen van het gebruik van Blender:</h1>\n" +
              "    <ul>\n" +
              "        <li><strong>Leercurve:</strong> Voor beginners kan de leercurve steil zijn vanwege de uitgebreide functionaliteit en het brede scala aan mogelijkheden.</li>\n" +
              "        <li><strong>Geen standaard in de industrie:</strong> In sommige branches wordt nog steeds meer gebruik gemaakt van andere 3D-software, wat relevant kan zijn voor samenwerking.</li>\n" +
              "        <li><strong>Interface kan overweldigend zijn:</strong> De gebruikersinterface kan complex lijken voor nieuwkomers, hoewel het configurabel is.</li>\n" +
              "        <li><strong>Specifieke hardwarevereisten:</strong> Voor zwaardere taken, zoals complexe simulaties, zijn krachtige computers met specifieke grafische kaarten nodig.</li>\n" +
              "        <li><strong>Beperktere marktplaats voor add-ons:</strong> Hoewel er add-ons beschikbaar zijn, is de marktplaats minder uitgebreid in vergelijking met sommige andere 3D-software.</li>\n" +
              "    </ul>",
          },
        ],
      },
      {
        name: "3D Design",
        description: "",
        color: "bg-red-900",
        children: [
          {
            name: "Blender",
            description: " ",
            color: "bg-red-900",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo_Blender.svg/300px-Logo_Blender.svg.png",
            sources: [
              {
                name: "Blender tutorial playlist",
                url: "https://www.youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD",
              },
            ],
            info:
              "<h1>Blender</h1>" +
              "<br>" +
              "<h1>Wat is Blender?</h1><br>" +
              "<p>Blender is een gratis en open-source 3D computer graphics-softwarepakket dat wordt gebruikt voor het modelleren, animeren, renderen, compositen en bewerken van video's. Het is ontwikkeld door de Blender Foundation en wordt wereldwijd veel gebruikt door 3D-artiesten, animatoren, game-ontwikkelaars en filmmakers.</p>" +
              "<p>Blender biedt een uitgebreid scala aan functies, waaronder 3D-modellering, sculpting, texturing, rigging (het toewijzen van virtuele botten aan 3D-modellen), animatie en simulatie van fysica, zoals vloeistoffen en rook. Daarnaast heeft Blender een ingebouwd videosnij- en bewerkingsgereedschap, wat het tot een veelzijdige tool maakt voor het hele productieproces.</p>" +
              "<p>Een opvallend kenmerk van Blender is dat het een actieve en betrokken gemeenschap heeft die regelmatig bijdraagt aan de ontwikkeling van de software. Door zijn open-source karakter is Blender beschikbaar voor verschillende besturingssystemen, waaronder Windows, macOS en Linux.</p>" +
              "<p>Kortom, Blender is een krachtige en toegankelijke 3D-software die creatieve professionals en enthousiaste beginners de mogelijkheid biedt om hoogwaardige 3D-content te creëren.</p><br>" +
              "<h1>Voordelen van het gebruik van Blender:</h1>\n" +
              "    <ol>\n" +
              "        <li><strong>Gratis en open-source:</strong> Blender is gratis te gebruiken en biedt volledige toegang tot de broncode, waardoor het voor iedereen beschikbaar en aanpasbaar is.</li>\n" +
              "        <li><strong>Brede functionaliteit:</strong> Het omvat een uitgebreid scala aan functies voor 3D-modellering, animatie, texturing, rendering en videobewerking.</li>\n" +
              "        <li><strong>Aktieve gemeenschap:</strong> Blender heeft een actieve en betrokken gemeenschap van gebruikers en ontwikkelaars die bijdragen aan de voortdurende verbetering van de software.</li>\n" +
              "        <li><strong>Multiplatform:</strong> Beschikbaar voor Windows, macOS en Linux, waardoor het toegankelijk is op verschillende besturingssystemen.</li>\n" +
              "        <li><strong>Continue ontwikkeling:</strong> Blender wordt regelmatig bijgewerkt met nieuwe functies en verbeteringen.</li>\n" +
              "    </ol>\n" +
              "<br>" +
              "    <h1>Nadelen van het gebruik van Blender:</h1>\n" +
              "    <ul>\n" +
              "        <li><strong>Leercurve:</strong> Voor beginners kan de leercurve steil zijn vanwege de uitgebreide functionaliteit en het brede scala aan mogelijkheden.</li>\n" +
              "        <li><strong>Geen standaard in de industrie:</strong> In sommige branches wordt nog steeds meer gebruik gemaakt van andere 3D-software, wat relevant kan zijn voor samenwerking.</li>\n" +
              "        <li><strong>Interface kan overweldigend zijn:</strong> De gebruikersinterface kan complex lijken voor nieuwkomers, hoewel het configurabel is.</li>\n" +
              "        <li><strong>Specifieke hardwarevereisten:</strong> Voor zwaardere taken, zoals complexe simulaties, zijn krachtige computers met specifieke grafische kaarten nodig.</li>\n" +
              "        <li><strong>Beperktere marktplaats voor add-ons:</strong> Hoewel er add-ons beschikbaar zijn, is de marktplaats minder uitgebreid in vergelijking met sommige andere 3D-software.</li>\n" +
              "    </ul>",
          },
          {
            name: "Maya",
            description: " ",
            color: "bg-red-900",
            image:
              "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Autodesk_Maya_version_2023_icon.jpg/135px-Autodesk_Maya_version_2023_icon.jpg",
            sources: [
              {
                name: "Maya tutorial playlist",
                url: "https://www.youtube.com/playlist?list=PLsPHRLf6UN4k0_AfrTzLmK4iDV9J97-qR",
              },
            ],
            info:
              "<h1>Maya</h1>" +
              "<br>" +
              "<h1>Wat is Maya?</h1><br>" +
              "<p>Maya is een krachtige 3D-computergrafiekensoftware die wordt gebruikt voor modellering, animatie, simulatie en rendering. Het is ontwikkeld door Autodesk en wordt veel gebruikt in de film-, televisie- en game-industrie, evenals door ontwerpers en kunstenaars voor diverse 3D-toepassingen.</p>" +
              "<p>Met Autodesk Maya kunnen gebruikers complexe 3D-modellen maken, animaties produceren, virtuele omgevingen creëren, en realistische visualisaties produceren. Het programma biedt een uitgebreide reeks gereedschappen voor modellering, waaronder polygonale modellering, NURBS-modellering en sculpting. Het ondersteunt ook karakteranimatie met rigging, skeletonen en de mogelijkheid om geavanceerde animaties te maken.</p>" +
              "<p>Maya staat bekend om zijn geavanceerde mogelijkheden op het gebied van simulatie, zoals het simuleren van vloeistoffen, rook, vuur en stoffen, wat het populair maakt voor visuele effecten in films en games. Daarnaast biedt het uitgebreide renderingmogelijkheden om realistische afbeeldingen en animaties te genereren.</p>" +
              "<p>Door zijn veelzijdigheid en diepgaande functies wordt Maya gebruikt door professionals die streven naar hoogwaardige 3D-content in diverse creatieve industrieën.</p><br>" +
              "<h1>Voordelen van het gebruik van Autodesk Maya:</h1>\n" +
              "    <ol>\n" +
              "        <li><strong>Uitgebreide modelleringsmogelijkheden:</strong> Maya biedt geavanceerde gereedschappen voor zowel polygonale als NURBS-modellering, evenals sculpting voor gedetailleerde 3D-modellen.</li>\n" +
              "        <li><strong>Geavanceerde animatiemogelijkheden:</strong> Het programma is bekend om zijn krachtige animatiefuncties, inclusief rigging, skeletonen en tools voor karakteranimatie.</li>\n" +
              "        <li><strong>Simulatiemogelijkheden:</strong> Maya excelleert in simulatie, met mogelijkheden voor het simuleren van vloeistoffen, rook, vuur en stoffen, wat het geschikt maakt voor visuele effecten in films en games.</li>\n" +
              "        <li><strong>Renderingmogelijkheden:</strong> Het biedt uitgebreide renderingmogelijkheden voor het produceren van realistische afbeeldingen en animaties.</li>\n" +
              "        <li><strong>Industriestandaard:</strong> Maya wordt breed gebruikt in de film-, televisie- en game-industrie en wordt beschouwd als een industriestandaard in 3D-ontwerp en animatie.</li>\n" +
              "    </ol>\n" +
              "<br>" +
              "    <h1>Nadelen van het gebruik van Autodesk Maya:</h1>\n" +
              "    <ul>\n" +
              "        <li><strong>Leercurve:</strong> Voor beginners kan Maya complex zijn vanwege de uitgebreide functies, wat een steile leercurve met zich meebrengt.</li>\n" +
              "        <li><strong>Kosten:</strong> Maya is een commercieel product en kan relatief duur zijn, wat een overweging kan zijn voor individuele gebruikers.</li>\n" +
              "        <li><strong>Systeemvereisten:</strong> Voor optimale prestaties zijn krachtige computers met specifieke grafische kaarten vereist, wat een investering kan betekenen.</li>\n" +
              "        <li><strong>Gesloten broncode:</strong> In tegenstelling tot sommige open-source alternatieven, heeft Maya een gesloten broncode, wat beperkingen kan opleggen aan aanpassingen en uitbreidingen.</li>\n" +
              "        <li><strong>Specialisatie:</strong> Maya is zeer gespecialiseerd en kan mogelijk meer functies bevatten dan nodig is voor bepaalde gebruikers, waardoor het overweldigend kan zijn.</li>\n" +
              "    </ul>",
          },
        ],
      },
    ],
  },
  {
    name: "Programmeren",
    description:
      "Programmeer talen zijn de kern van je hele programma. Zonder een goede keuze van de taal die je nodig hebt loop je vast.",
    color: "bg-cyan-500",
    icon: "code-slash-outline",
    iconColor: "text-cyan-800",
    children: [
      {
        name: "Frontend",
        description: "Front-end zijn de dingen die je ziet",
        color: "bg-teal-500",
        icon: "code",
        iconColor: "text-teal-800",
        children: [
          {
            name: "Beginnend",
            description: "",
            color: "bg-emerald-400",
            children: [
              {
                name: "HTML & CSS",
                description:
                  "HTML en CSS zijn twee essentiële talen voor het bouwen van de front-end van websites en het vormgeven van webpagina's. ",
                color: "bg-blue-500",
                image:
                  "https://scontent-ams4-1.xx.fbcdn.net/v/t1.6435-9/183056435_1687570708117124_4542630565247756730_n.png?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8631f5&_nc_ohc=BySOeatZuaYAX8V3NmY&_nc_ht=scontent-ams4-1.xx&oh=00_AfAiAk4Bqff7z9ZyS2xh893LqDaV6mFhoFNTm04VEtUvww&oe=64B7D9C8",
                sources: [
                  {
                    name: "HTML Tutorial",
                    url: "https://www.youtube.com/watch?v=HD13eq_Pmp8",
                  },
                  {
                    name: "Css Tutorial",
                    url: "https://www.youtube.com/watch?v=wRNinF7YQqQ&t=1872s",
                  },
                  {
                    name: "Flexbox Tutorial",
                    url: "https://www.youtube.com/watch?v=phWxA89Dy94&t=177s",
                  },
                ],
                info:
                  "<h1>HTML & CSS</h1>" +
                  "<br>" +
                  "<p>HTML en CSS zijn twee essentiële talen voor het bouwen van de front-end van websites en het vormgeven van webpagina's. HTML staat voor HyperText Markup Language, terwijl CSS staat voor Cascading Style Sheets. </p>" +
                  "<br>" +
                  "<p> HTML functioneert als het skelet van een webpagina. Het wordt gebruikt om de structuur en inhoud van een webpagina te definiëren. Met HTML kun je tekst, afbeeldingen, links, koppen, paragrafen en andere elementen op een logische en gestructureerde manier organiseren. </p>" +
                  "<p> Het maakt gebruik van tags (omringd door kleiner dan en groter dan tekens) om elementen te markeren en hun betekenis aan te geven. Bijvoorbeeld, een h1 tag wordt gebruikt voor de belangrijkste kop van een pagina, terwijl een p tag wordt gebruikt voor een paragraaf. De basis van HTML is vrij simpel om te leren en je kunt al redelijk snel een mooie website maken samen met CSS. </p>" +
                  "<p> CSS daarentegen richt zich op de presentatie en het uiterlijk van een webpagina. Het maakt het mogelijk om de kleuren, lettertypen, lay-out en andere visuele aspecten van een webpagina aan te passen. </p>" +
                  "<br>" +
                  "<p> Met CSS kun je de visuele stijl van HTML-elementen, classes en id's aanpassen om ze er consistent en aantrekkelijk uit te laten zien. In CSS gebruik je selectoren (stukjes code in je CSS bestand die een specifiek element aanwijzen) om de gewenste uiterlijke kenmerken toe te passen per element. Dit stelt je in staat om kleuren, lettertypen, lay-out en andere visuele eigenschappen van je webpagina aan te passen. Het belangrijkste bij het leren van HTML en CSS is consistentie en oefening. Neem de tijd om de basisprincipes te begrijpen en blijf regelmatig oefenen om je vaardigheden te verbeteren. Met de nodige praktijk en geduld kun je al snel beginnen met het bouwen en vormgeven van je eigen websites.</p>",
              },
              {
                name: "JavaScript",
                description:
                  "Javascript is een programmeertaal die voornamelijk wordt gebruikt voor het ontwikkelen van interactieve en dynamische functies op websites.",
                color: "bg-orange-500",
                image:
                  "https://oracle-devrel.github.io/devo-image-repository/seo-thumbnails/JavaScript---Thumbnail-1200-x-630.jpg",
                sources: [
                  {
                    name: "Wat is JavaScript?",
                    url: "https://youtu.be/DHjqpvDnNGE",
                  },
                  {
                    name: "JavaScript tutorial",
                    url: "https://www.youtube.com/watch?v=PkZNo7MFNFg&t=383s",
                  },
                  {
                    name: "De JavaScript survival guide",
                    url: "https://youtu.be/9emXNzqCKyg",
                  },
                ],
                info:
                  "<h1>JavaScript</h1>" +
                  "<br>" +
                  "<p>Javascript is een programmeertaal die voornamelijk wordt gebruikt voor het ontwikkelen van interactieve en dynamische functies op websites. Waarin HTML en CSS gebruikt werden voor het uiterlijk van de website, maakt Javascript de website ook functioneel. Het wordt ook wel de taal van het web genoemd, omdat het direct in de webbrowser van een gebruiker wordt uitgevoerd. </p>" +
                  "<br>" +
                  "<p> Javascript stelt ontwikkelaars in staat om de interactie met gebruikers te verbeteren, gegevens te manipuleren, de inhoud van een webpagina dynamisch te wijzigen en complexe functionaliteiten toe te voegen. Met Javascript kun je formulieren valideren, gebeurtenissen (events) beheren, animaties maken, inhoud dynamisch laden en nog veel meer. Dit klinkt allemaal erg moeilijk, maar zodra je de basis van Javascript weet leer je dit supersnel. </p>" +
                  "<br>" +
                  "<p> Javascript is een scripttaal, wat betekent dat het regel voor regel wordt uitgevoerd door je webbrowser. Het is een flexibele en veelzijdige taal die gebruikt kan worden voor simpele en moeilijkere programma’s. Javascript is een objectgeoriënteerde taal, wat betekent dat het werkt met objecten die eigenschappen en methoden bevatten om taken uit te voeren. </p>" +
                  "<p> Het is belangrijk om te onthouden dat Javascript een krachtige taal is die constant evolueert. Het kan even duren voordat je alle concepten en functies volledig beheerst. Blijf oefenen, bouw je eigen projecten en wees geduldig. Na verloop van tijd zul je vertrouwd raken met de mogelijkheden van Javascript en in staat zijn om boeiende en interactieve webapplicaties te bouwen.</p>",
              },

              {
                name: "GitHub",
                description:
                  "GitHub is een web gebaseerd platform voor versiebeheer en samenwerking dat ontwikkelaars en teams in staat stelt om codeprojecten te beheren, te delen en eraan samen te werken.",
                color: "bg-purple-700",
                image:
                  "https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1-1024x512.png",
                sources: [
                  {
                    name: "Versiebeheer",
                    url: "https://www.youtube.com/watch?v=Yc8sCSeMhi4",
                  },
                  {
                    name: "Git tutorial",
                    url: "https://youtu.be/USjZcfj8yxE",
                  },
                  {
                    name: "Git en GitHub tutorial",
                    url: "https://youtu.be/tRZGeaHPoaw",
                  },
                ],
                info:
                  "<h1>GitHub</h1>" +
                  "<br>" +
                  "<p>Versiebeheer betekent het bijhouden en beheren van wijzigingen in je code in de loop van de tijd. Het stelt ontwikkelaars in staat om de ontwikkeling van een project te volgen, wijzigingen te documenteren, eerdere versies van code te herstellen en samen te werken met anderen. Versiebeheer is belangrijk in softwareontwikkeling, aangezien meerdere ontwikkelaars vaak tegelijkertijd aan een project werken. Het biedt een gestructureerde manier om wijzigingen in de code aan te brengen, waardoor conflicten worden voorkomen en de samenwerking soepeler verloopt. </p>" +
                  "<br>" +
                  "<p> Een mooie tool hiervoor is GitHub, GitHub is een web gebaseerd platform voor versiebeheer en samenwerking dat ontwikkelaars en teams in staat stelt om codeprojecten te beheren, te delen en eraan samen te werken. Het is een essentiële tool voor softwareontwikkeling en wordt veel gebruikt door ontwikkelaars over de hele wereld. </p>" +
                  "<p> Met GitHub kun je je code opslaan in code-opslagplaatsen, zogenaamde repositories. Deze repositories functioneren als een centrale locatie waarin je je codebestanden kunt opslaan en de geschiedenis van wijzigingen kunt bijhouden. Dit maakt het gemakkelijk om samen te werken aan projecten, wijzigingen te volgen en eventuele fouten of bugs op te lossen. </p>",
              },
            ],
          },
          {
            name: "Gevorderd",
            description: "",
            color: "bg-teal-700",
            children: [
              {
                name: "React",
                description:
                  "React is een krachtige JavaScript-bibliotheek die ontwikkelaars in staat stelt om op een gestructureerde en efficiënte manier gebruikersinterfaces te bouwen. Door het gebruik van herbruikbare componenten en de virtual DOM biedt React een intuïtieve en snelle manier om interactieve webapplicaties te ontwikkelen.",
                color: "bg-blue-500",
                image:
                  "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
                sources: [
                  {
                    name: "React JS Explained In 10 Minutes",
                    url: "https://youtu.be/s2skans2dP4",
                  },
                  {
                    name: "Learn React In 30 Minutes",
                    url: "https://youtu.be/hQAHSlTtcmY",
                  },
                  {
                    name: "Why & When I Use React JS",
                    url: "https://youtu.be/yAbnoYfV99g",
                  },
                ],
                info: '<p class="mt-6">React is een populaire JavaScript-bibliotheek voor het bouwen van gebruikersinterfaces voor webapplicaties. Het is ontwikkeld door Facebook en wordt ook onderhouden door een community van ontwikkelaars. React streeft ernaar om het bouwen van complexe UI-componenten eenvoudiger te maken door een declaratieve benadering te bieden.</p><p class="mt-6">Een van de belangrijkste kenmerken van React is de mogelijkheid om herbruikbare componenten te maken. In plaats van een webapplicatie als een grote monolithische structuur te bouwen, kan React de interface opdelen in kleine, zelfstandige componenten. Deze componenten kunnen afzonderlijk worden ontwikkeld, getest en opnieuw gebruikt in verschillende delen van de applicatie.</p><p class="mt-6">React maakt gebruik van een virtuele DOM (Document Object Model) om efficiënte updates van de gebruikersinterface mogelijk te maken. In plaats van rechtstreeks op de DOM te werken, maakt React een virtuele representatie van de DOM bij en houdt het bij welke elementen moeten worden bijgewerkt. Hierdoor kan React alleen de nodige wijzigingen aanbrengen in plaats van de hele pagina opnieuw te renderen, waardoor de prestaties worden geoptimaliseerd.</p><p class="mt-6">React kan worden gebruikt in combinatie met andere bibliotheken of frameworks en is onafhankelijk van de back-end-technologie. Het wordt vaak gebruikt in combinatie met tools zoals webpack en Babel om moderne JavaScript-functies en modules te ondersteunen.</p>',
              },
              {
                name: "Vue.js",
                description:
                  "Vue.js is een progressief JavaScript-framework voor het bouwen van gebruikersinterfaces. Het maakt gebruik van een declaratieve syntaxis voor het opbouwen van componenten en stelt ontwikkelaars in staat om op een efficiënte en gestructureerde manier interactieve webapplicaties te bouwen.",
                color: "bg-orange-600",
                image: "https://vuejs.org/images/logo.png",
                sources: [
                  {
                    name: "Vue.js Documentation",
                    url: "https://vuejs.org/",
                  },
                  {
                    name: "Vue.js Crash Course door Traversy Media",
                    url: "https://youtu.be/Wy9q22isx3U",
                  },
                  {
                    name: "Building a Todo App with Vue.js",
                    url: "https://youtu.be/4deVCNJq3qc",
                  },
                ],
                info: "<p>Vue.js is een progressief JavaScript-framework voor het bouwen van gebruikersinterfaces. Het maakt gebruik van een declaratieve syntaxis voor het opbouwen van componenten en stelt ontwikkelaars in staat om op een efficiënte en gestructureerde manier interactieve webapplicaties te bouwen.</p><p class='mt-6'>Met Vue.js kun je componenten definiëren die herbruikbaar en modulair zijn. Deze componenten kunnen worden samengevoegd om complexe gebruikersinterfaces te bouwen. Vue.js maakt gebruik van een virtual DOM om efficiënt wijzigingen in de weergave bij te houden en updates alleen toe te passen waar nodig, waardoor de prestaties worden geoptimaliseerd.</p><p class='mt-6'>Een van de belangrijkste kenmerken van Vue.js is de reactiviteit. Wanneer de gegevens in een Vue-component veranderen, worden de bijbehorende delen van de weergave automatisch bijgewerkt. Dit maakt het bouwen van dynamische en interactieve webapplicaties eenvoudig en intuïtief.</p><p class='mt-6'>Vue.js heeft ook een flexibele routing-functionaliteit die vergelijkbaar is met Vue Router. Hiermee kun je eenvoudig navigatie tussen pagina's implementeren en URL's koppelen aan specifieke componenten.</p><p class='mt-6'>Voor gedetailleerde informatie over Vue.js kun je de officiële documentatie raadplegen, die uitgebreide handleidingen en voorbeelden biedt. Daarnaast zijn er ook tutorials en crash courses beschikbaar, zoals de Vue.js Crash Course door Traversy Media en Building a Todo App with Vue.js.</p>",
              },
              {
                name: "Svelte",
                description:
                  "Svelte is een front-end javascript framework voor het maken van interactieve webpagina’s. Svelte applicaties zijn component based en maken gebruik van een DOM net zoals React en Vue. Svelte heeft echter wel een aantal unieke features waardoor het nogal verschilt van bestaande frameworks. ",
                color: "bg-emerald-700",
                image:
                  "https://res.cloudinary.com/practicaldev/image/fetch/s--78sV_n0e--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/un1vp3qoyd13gznq1pvt.png",
                sources: [
                  {
                    name: "Rich Harris, Rethinking reactivity",
                    url: "https://youtu.be/AdNJ3fydeao",
                  },
                  {
                    name: "Svelte in 100 Seconds ",
                    url: "https://youtu.be/rv3Yq-B8qp4",
                  },
                  {
                    name: "Svelte Crash Course door Traversy Media",
                    url: "https://youtu.be/3TVy6GdtNuQ",
                  },
                ],
                info: "<p>Svelte is een open-source, front-end javascript framework voor het maken van interactieve webpagina’s. Svelte applicaties zijn component based en maken gebruik van een DOM net, zoals React en Vue. Svelte heeft echter wel een aantal unieke features waardoor het nogal verschilt van bestaande frameworks. Svelte is niet zomaar erg populair onder de developers. Als je kijkt naar de jaarlijkse stackoverflow survey zie je dat Svelte ook een van de meest geliefde web frameworks is op dit moment.</p><p class='mt-6'>Één van de grootste pluspunten aan Svelte is dat je als developer minder code hoeft te schrijven. Dit zorgt ervoor dat een developer  sneller webpagina’s kan maken en er minder kans op bugs zijn, omdat er minder code is geschreven.</p><p class='mt-6'>Eerder werd aangegeven dat Svelte een framework is, maar technisch gezien is Svelte een compiler. Dit is ook gelijk het grootste verschil met de andere populaire front-end technologieën. Waar React en Vue het meeste werk op de webpagina zelf uitvoeren in de browser, verplaatst Svelte dit werk naar de compile stap van de applicatie. Hierdoor heeft het een aanzienlijke performance boost in vergelijking met  andere frameworks. Omdat de code in native Javascript wordt gecompileerd, stelt het Svelte instaat om gebruik te maken van een echte DOM, in plaats van een virtuele DOM. In de virtuele DOM worden updates aan de pagina’s eigenlijk vrij omslachtig verwerkt. Op de achtergrond wordt bij een state verandering de huidige pagina vergeleken met de vorige versie van de pagina (snapshot) en aan de hand hiervan wordt een nieuwe pagina gemaakt waar de veranderingen weer in zijn gegeven. Bij een echte DOM wordt een state verandering in de specifieke node (HTML element) aangepast zonder het omslachtige vergelijken van de snapshots. Dit maakt Svelte sneller dan populaire frameworks zoals React.js en Vue.js.</p><p class='mt-6'>Omdat de code van Svelte wordt gecompileerd naar native Javascript is Svelte instaat om volledige reactive te zijn. Dit houdt dus in dat een bestaande weergegeven variabele automatisch wordt bijgewerkt op een pagina, wanneer deze variabele op de pagina, zoals een cijfer in het eerdere counter voorbeed, wordt geüpdatet. Hier is dus geen State logica voor nodig, zoals bij React.js en Vue.js wel ziet. Dit maakt het een stuk makkelijker om met Svelte te werken en hierdoor vraagt Svelte ook een veel kleinere learning curve dan andere web frameworks.</p>",
              },
              {
                name: "Next.js",
                description:
                  "Next.js is een framework voor het bouwen van server-side rendered (SSR) en statisch gegenereerde React-applicaties. Het stelt ontwikkelaars in staat om snel en efficiënt webpagina's te maken met behulp van React en biedt extra functionaliteiten voor server-side rendering en routing.",
                color: "bg-purple-700",
                image:
                  "https://www.datocms-assets.com/205/1667580983-next.svg?auto=format&fit=max&w=1200",
                sources: [
                  {
                    name: "Next.js Documentatie",
                    url: "https://nextjs.org/docs",
                  },
                  {
                    name: "Next.js Crash Course door Traversy Media",
                    url: "https://youtu.be/mTz0GXj8NN0",
                  },
                  {
                    name: "Build and Deploy a Full Stack App Using the Official React Framework",
                    url: "https://youtu.be/wm5gMKuwSYk",
                  },
                ],
                info: "<p>Next.js is een krachtig framework voor het bouwen van server-side rendered (SSR) en statisch gegenereerde React-applicaties. Het stelt ontwikkelaars in staat om snel en efficiënt webpagina's te maken met behulp van React en biedt extra functionaliteiten voor server-side rendering en routing.</p><p class='mt-6'>Met Next.js kun je gebruik maken van server-side rendering, wat betekent dat de webpagina's aan de serverzijde worden gerenderd voordat ze naar de browser worden gestuurd. Dit biedt voordelen op het gebied van prestaties en zoekmachine-optimalisatie, omdat de inhoud van de pagina direct beschikbaar is voor crawlers en sneller kan worden weergegeven aan gebruikers.</p><p class='mt-6'>Daarnaast biedt Next.js ondersteuning voor statische sitegeneratie, waarbij de pagina's van tevoren worden gegenereerd en als statische bestanden worden geleverd aan de gebruikers. Dit is vooral handig voor contentrijke websites waarvan de inhoud niet vaak verandert. Statische sitegeneratie verbetert de laadtijd van de pagina's en vermindert de belasting van de server.</p><p class='mt-6'>Next.js heeft ook krachtige routing-functionaliteit, waarmee je gemakkelijk navigatie tussen pagina's kunt implementeren. Het biedt dynamische routing, query parameters en een eenvoudige API voor het definiëren van routes.</p><p class='mt-6'>Om aan de slag te gaan met Next.js kun je de officiële documentatie raadplegen, die uitgebreide gidsen en voorbeelden bevat. Daarnaast zijn er tal van tutorials en crash courses beschikbaar, zoals de Next.js Crash Course door Traversy Media en de Full Course van JavaScript Mastery.</p>",
              },
              {
                name: "Nuxt.js",
                description:
                  "Nuxt.js is een framework voor het bouwen van server-side rendered (SSR) en statisch gegenereerde Vue.js-applicaties. Het biedt ontwikkelaars een gestructureerde en geoptimaliseerde manier om Vue.js-projecten te bouwen met ondersteuning voor server-side rendering, routing en andere handige functies.",
                color: "bg-yellow-600",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Nuxt_logo_%282021%29.svg/2560px-Nuxt_logo_%282021%29.svg.png",
                sources: [
                  {
                    name: "Nuxt.js Documentation",
                    url: "https://nuxtjs.org/docs",
                  },
                  {
                    name: "Nuxt.js Crash Course door Traversy Media",
                    url: "https://youtu.be/ltzlhAxJr74",
                  },
                  {
                    name: "The Nuxt big thing in web development? ",
                    url: "https://youtu.be/noq-ZHTD2Cg",
                  },
                ],
                info: "<p>Nuxt.js is een krachtig framework voor het bouwen van server-side rendered (SSR) en statisch gegenereerde Vue.js-applicaties. Het biedt ontwikkelaars een gestructureerde en geoptimaliseerde manier om Vue.js-projecten te bouwen met ondersteuning voor server-side rendering, routing en andere handige functies.</p><p class='mt-6'>Met Nuxt.js kun je Vue.js-applicaties server-side renderen, wat betekent dat de HTML voor de webpagina's aan de serverzijde wordt gegenereerd en vervolgens naar de browser wordt gestuurd. Dit zorgt voor betere prestaties en SEO, omdat de pagina-inhoud direct beschikbaar is voor crawlers en sneller kan worden weergegeven aan gebruikers.</p><p class='mt-6'>Daarnaast ondersteunt Nuxt.js ook statische sitegeneratie, waarbij de pagina's van tevoren worden gegenereerd en als statische bestanden worden geleverd aan de gebruikers. Dit is vooral handig voor websites met statische inhoud die niet frequent hoeft te worden bijgewerkt. Statische sitegeneratie verbetert de laadtijd van de pagina's en vermindert de serverbelasting.</p><p class='mt-6'>Nuxt.js biedt ook een krachtige routing-functionaliteit, vergelijkbaar met Vue Router, waarmee je eenvoudig routes kunt definiëren en navigatie tussen pagina's kunt implementeren. Het maakt gebruik van het bestandsysteem als router, waardoor je automatisch routes kunt genereren op basis van de mappen- en bestandsstructuur van je project.</p><p class='mt-6'>Voor gedetailleerde informatie over Nuxt.js kun je de officiële documentatie raadplegen, die uitgebreide handleidingen en voorbeelden biedt. Daarnaast zijn er ook tutorials en crash courses beschikbaar, zoals de Nuxt.js Crash Course door Traversy Media.</p>",
              },
              {
                name: "SvelteKit",
                description:
                  "SvelteKit is een framework voor het bouwen van webapplicaties met Svelte. Het biedt een gestroomlijnde ontwikkelervaring met ingebouwde ondersteuning voor routing, server-side rendering en andere handige functies. Met SvelteKit kunnen ontwikkelaars snel en efficiënt interactieve webapplicaties bouwen met de kracht van Svelte.",
                color: "bg-red-500",
                image:
                  "https://user-images.githubusercontent.com/11630812/114088279-7cd7be80-98d2-11eb-883c-66c3bf48f293.png",
                sources: [
                  {
                    name: "Sveltekit Website",
                    url: "https://kit.svelte.dev/",
                  },
                  {
                    name: "Sveltekit full Tutorial",
                    url: "https://youtube.com/watch?v=9OlLxkaeVvw&list=PL4cUxeGkcC9hpM9ARM59Ve3jqcb54dqiP&index=1",
                  },
                ],
                info: "<p>SvelteKit is een framework voor het bouwen van webapplicaties met Svelte. Het biedt een gestroomlijnde ontwikkelervaring met ingebouwde ondersteuning voor routing, server-side rendering en andere handige functies. Met SvelteKit kunnen ontwikkelaars snel en efficiënt interactieve webapplicaties bouwen met de kracht van Svelte.</p><p class='mt-6'>SvelteKit bouwt voort op de concepten van Svelte, waarbij de code van componenten tijdens de buildfase wordt omgezet naar efficiënte JavaScript-code. Dit resulteert in snelle en lichtgewicht webapplicaties die direct in de browser worden geladen. Daarnaast biedt SvelteKit ingebouwde ondersteuning voor server-side rendering, waardoor de initiële laadtijd van de pagina wordt geoptimaliseerd en de inhoud direct beschikbaar is voor zoekmachines.</p><p class='mt-6'>Het routing-systeem van SvelteKit maakt het gemakkelijk om navigatie tussen pagina's te implementeren en dynamische routes te definiëren. Het biedt ook ondersteuning voor preloading en prefetching, waardoor de gebruikerservaring wordt verbeterd door snelle paginatransities en vooraf geladen bronnen.</p>",
              },
            ],
          },
        ],
      },
      {
        name: "Backend",
        description: "Is het gedeelte wat je niet ziet",
        color: "bg-emerald-600",
        icon: "server",
        iconColor: "text-emerald-800",
        children: [
          {
            name: "Beginnend",
            description: "",
            color: "bg-emerald-400",
            children: [
              {
                name: "JavaScript",
                description: "",
                color: "bg-emerald-700",
                children: [
                  {
                    name: "Express",
                    description:
                      "Express is een minimalistisch, flexibel en robuust webapplicatieframework voor Node.js. Het wordt vaak gebruikt om serverzijde-applicaties en API's te bouwen.",
                    color: "bg-emerald-700",
                    image: "https://expressjs.com/images/express-facebook-share.png",
                    sources: [
                      {
                        name: "Wat is Express",
                        url: "https://www.youtube.com/watch?v=0QRFOsrBtXw&pp=ygUKZXhwcmVzcyBqcw%3D%3D",
                      },
                      {
                        name: "Leer Express in 35 minuten",
                        url: "https://www.youtube.com/watch?v=SccSCuHhOw0&ab_channel=WebDevSimplified",
                      },
                      {
                        name: "Express Hello World voorbeeld",
                        url: "https://expressjs.com/en/starter/hello-world.html",
                      },
                    ],
                    info:
                      "<p>Express is een minimalistisch, flexibel en robuust webapplicatieframework voor Node.js. Het wordt vaak gebruikt om serverzijde-applicaties en API's te bouwen. Express maakt het eenvoudig om routes te definiëren, middleware toe te passen en HTTP-verzoeken te beheren.</p>" +
                      "<br>" +
                      "<p>Met Express kun je snel RESTful API's maken en endpoints definiëren voor het verwerken van HTTP-verzoeken. Het biedt ook een scala aan middleware die je kunt gebruiken om functionaliteiten toe te voegen, zoals authenticatie, logging en meer.</p>" +
                      "<p>Het begrijpen van het gebruik van routes, middleware, en het werken met aanvragen en reacties zijn kernaspecten van het werken met Express. Daarnaast is kennis van Node.js van groot belang, omdat Express bovenop Node.js wordt gebouwd.</p>" +
                      "<p>De Express-documentatie is een waardevolle bron om te leren hoe je het framework moet gebruiken. Het helpt je bij het begrijpen van de verschillende functies, methoden en configuratiemogelijkheden die Express te bieden heeft.</p>",
                  },
                ],
              },
              {
                name: "Python",
                description: "",
                color: "bg-emerald-700",
                children: [
                  {
                    name: "Django",
                    description:
                      "Django is een high-level web framework geschreven in Python dat snel en efficiënt webapplicaties ontwikkelen mogelijk maakt.",
                    color: "bg-emerald-700",
                    image: "https://www.fullstackpython.com/img/logos/django.png",
                    sources: [
                      {
                        name: "Wat is Django",
                        url: "https://www.youtube.com/watch?v=0sMtoedWaf0&pp=ygUNZGphbmdvIHB5dGhvbg%3D%3D",
                      },
                      {
                        name: "Leer Django in 20 minuten",
                        url: "https://www.youtube.com/watch?v=nGIg40xs9e4&pp=ygUNZGphbmdvIHB5dGhvbg%3D%3D",
                      },
                      {
                        name: "W3Schools Django Tutorial",
                        url: "https://www.w3schools.com/django/",
                      },
                    ],
                    info:
                      "<p>Django is een high-level web framework geschreven in Python dat snel en efficiënt webapplicaties ontwikkelen mogelijk maakt. Het volgt het 'Don't Repeat Yourself' (DRY) principe en streeft naar een clean en pragmatische codebase.</p>" +
                      "<br>" +
                      "<p>Met Django kun je snel databases modelleren, views definiëren, URL-routes instellen en formulieren maken. Het bevat ook een krachtig beheerderspaneel waarmee je de inhoud van je applicatie kunt beheren.</p>" +
                      "<p>Django REST Framework breidt Django uit om de ontwikkeling van API's te vergemakkelijken, waardoor je gemakkelijk RESTful API's kunt bouwen met Django.</p>" +
                      "<p>Een basiskennis van Python is handig bij het werken met Django, en het begrijpen van het MVC (Model-View-Controller) ontwerppatroon kan ook nuttig zijn. De Django-documentatie is een uitstekende bron om te leren hoe je het framework moet gebruiken.</p>",
                  },
                ],
              },
              {
                name: "C#",
                description: "",
                color: "bg-emerald-700",
                children: [
                  {
                    name: "ASP.NET",
                    description:
                      "ASP.NET is een framework voor het bouwen van moderne, dynamische webapplicaties met behulp van C++ als programmeertaal.",
                    color: "bg-emerald-700",
                    image:
                      "https://www.simplilearn.com/ice9/free_resources_article_thumb/ASP.NET_logo.jpg",
                    sources: [
                      {
                        name: "Wat is ASP.NET",
                        url: "https://dotnet.microsoft.com/en-us/learn/aspnet/what-is-aspnet",
                      },
                      {
                        name: "ASP.NET Documentation",
                        url: "https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-7.0&WT.mc_id=dotnet-35129-website",
                      },
                      {
                        name: "ASP.NET Crash Cource",
                        url: "https://www.youtube.com/watch?v=BfEjDD8mWYg&pp=ygUHYXNwLm5ldA%3D%3D",
                      },
                    ],
                    info:
                      "<p>ASP.NET is een framework voor het bouwen van moderne, dynamische webapplicaties met behulp van C++ als programmeertaal. Het biedt een breed scala aan tools en bibliotheken om webapplicaties te ontwikkelen, waaronder ondersteuning voor het Model-View-Controller (MVC) ontwerppatroon.</p>" +
                      "<br>" +
                      "<p>C++ wordt vaak gebruikt in combinatie met ASP.NET om krachtige en efficiënte webapplicaties te bouwen. ASP.NET ondersteunt zowel Web Forms als het moderne MVC-framework, waardoor ontwikkelaars flexibele opties hebben voor het bouwen van webapplicaties.</p>" +
                      "<p>Om met C++ en ASP.NET te werken, is het belangrijk om vertrouwd te raken met zowel C++-programmering als de concepten en tools van ASP.NET. Kennis van het .NET-framework en het gebruik van Visual Studio als ontwikkelomgeving kan ook nuttig zijn.</p>" +
                      "<p>Raadpleeg de ASP.NET-documentatie voor gedetailleerde informatie over het gebruik van het framework, en zoek naar C++-tutorials om je te helpen bij het ontwikkelen van je vaardigheden in deze programmeertaal.</p>",
                  },
                ],
              },
            ],
          },
          {
            name: "Gevorderd",
            description: "",
            color: "bg-teal-700",
            children: [
              {
                name: "JavaScript",
                description: "",
                color: "bg-emerald-700",
                children: [
                  {
                    name: "Node.js",
                    description:
                      "Node.js is een open-source, cross-platform runtime-omgeving voor het uitvoeren van JavaScript-code buiten een webbrowser.",
                    color: "bg-emerald-700",
                    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
                    sources: [
                      {
                        name: "Node.js Beginners Guide",
                        url: "https://www.youtube.com/watch?v=ENrzD9HAZK4&pp=ygUHbm9kZS5qcw%3D%3D",
                      },
                      {
                        name: "Node.js API Refrence Documentatie",
                        url: "https://nodejs.org/api/",
                      },
                      {
                        name: "W3Schools Node.js Tutorial",
                        url: "https://www.w3schools.com/nodejs/nodejs_get_started.asp",
                      },
                    ],
                    info:
                      "<p>Node.js is een open-source, cross-platform runtime-omgeving voor het uitvoeren van JavaScript-code buiten een webbrowser. Het stelt ontwikkelaars in staat om server-side JavaScript-toepassingen te bouwen en is bekend om zijn snelle uitvoering en schaalbaarheid.</p>" +
                      "<br>" +
                      "<p>Met Node.js kunnen ontwikkelaars efficiënt schaalbare netwerktoepassingen bouwen. Het is vooral populair voor het ontwikkelen van server-side webapplicaties en het bouwen van API's. In combinatie met frameworks zoals Express.js wordt het eenvoudig om snel webapplicaties te bouwen.</p>" +
                      "<p>Het begrijpen van asynchrone JavaScript-programmering, het gebruik van npm (Node Package Manager) en het werken met modules zijn belangrijke aspecten bij het werken met Node.js. Daarnaast is kennis van het Express.js-framework nuttig voor het bouwen van webapplicaties.</p>" +
                      "<p>Raadpleeg de officiële Node.js-documentatie voor gedetailleerde informatie over het gebruik van Node.js en kijk naar tutorials om je vaardigheden verder te ontwikkelen.</p>",
                  },
                  {
                    name: "Express",
                    description:
                      "Express is een minimalistisch, flexibel en robuust webapplicatieframework voor Node.js. Het wordt vaak gebruikt om serverzijde-applicaties en API's te bouwen.",
                    color: "bg-emerald-700",
                    image: "https://expressjs.com/images/express-facebook-share.png",
                    sources: [
                      {
                        name: "Wat is Express",
                        url: "https://www.youtube.com/watch?v=0QRFOsrBtXw&pp=ygUKZXhwcmVzcyBqcw%3D%3D",
                      },
                      {
                        name: "Leer Express in 35 minuten",
                        url: "https://www.youtube.com/watch?v=SccSCuHhOw0&ab_channel=WebDevSimplified",
                      },
                      {
                        name: "Express Hello World voorbeeld",
                        url: "https://expressjs.com/en/starter/hello-world.html",
                      },
                    ],
                    info:
                      "<p>Express is een minimalistisch, flexibel en robuust webapplicatieframework voor Node.js. Het wordt vaak gebruikt om serverzijde-applicaties en API's te bouwen. Express maakt het eenvoudig om routes te definiëren, middleware toe te passen en HTTP-verzoeken te beheren.</p>" +
                      "<br>" +
                      "<p>Met Express kun je snel RESTful API's maken en endpoints definiëren voor het verwerken van HTTP-verzoeken. Het biedt ook een scala aan middleware die je kunt gebruiken om functionaliteiten toe te voegen, zoals authenticatie, logging en meer.</p>" +
                      "<p>Het begrijpen van het gebruik van routes, middleware, en het werken met aanvragen en reacties zijn kernaspecten van het werken met Express. Daarnaast is kennis van Node.js van groot belang, omdat Express bovenop Node.js wordt gebouwd.</p>" +
                      "<p>De Express-documentatie is een waardevolle bron om te leren hoe je het framework moet gebruiken. Het helpt je bij het begrijpen van de verschillende functies, methoden en configuratiemogelijkheden die Express te bieden heeft.</p>",
                  },
                  {
                    name: "Nest.js",
                    description:
                      "Nest.js is een progressief Node.js-framework voor het bouwen van efficiënte en schaalbare server-side applicaties.",
                    color: "bg-emerald-700",
                    image:
                      "https://camo.githubusercontent.com/c704e8013883cc3a04c7657e656fe30be5b188145d759a6aaff441658c5ffae0/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f5f746578742e737667",
                    sources: [
                      {
                        name: "Wat is Nest.js",
                        url: "https://www.youtube.com/watch?v=0M8AYU_hPas&pp=ygUHbmVzdC5qcw%3D%3D",
                      },
                      {
                        name: "Nest.js API Tutorial",
                        url: "https://www.youtube.com/watch?v=F_oOtaxb0L8&pp=ygUHbmVzdC5qcw%3D%3D",
                      },
                      {
                        name: "Nest.js Documentatie",
                        url: "https://docs.nestjs.com/first-steps",
                      },
                    ],
                    info:
                      "<p>Nest.js is een progressief Node.js-framework voor het bouwen van efficiënte en schaalbare server-side applicaties. Het is gebaseerd op TypeScript en maakt gebruik van zowel objectgeoriënteerde als functionele programmeerconcepten.</p>" +
                      "<br>" +
                      "<p>Met Nest.js kunnen ontwikkelaars server-side applicaties en API's bouwen met behulp van een modulaire en gestructureerde architectuur. Het maakt gebruik van decorators en dependency injection om het ontwikkelproces te vereenvoudigen en de code goed leesbaar te houden.</p>" +
                      "<p>Een goed begrip van TypeScript, decorators, modules en dependency injection is essentieel bij het werken met Nest.js. Daarnaast biedt Nest.js uitgebreide documentatie die je kunt raadplegen om meer te leren over de verschillende functies en concepten.</p>" +
                      "<p>Verken de officiële Nest.js-documentatie en bekijk tutorials om verder vertrouwd te raken met het framework en hoe je er effectief mee kunt bouwen.</p>",
                  },
                ],
              },
              {
                name: "Python",
                description: "",
                color: "bg-emerald-700",
                children: [
                  {
                    name: "Django",
                    description:
                      "Django is een high-level web framework geschreven in Python dat snel en efficiënt webapplicaties ontwikkelen mogelijk maakt.",
                    color: "bg-emerald-700",
                    image: "https://www.fullstackpython.com/img/logos/django.png",
                    sources: [
                      {
                        name: "Wat is Django",
                        url: "https://www.youtube.com/watch?v=0sMtoedWaf0&pp=ygUNZGphbmdvIHB5dGhvbg%3D%3D",
                      },
                      {
                        name: "Leer Django in 20 minuten",
                        url: "https://www.youtube.com/watch?v=nGIg40xs9e4&pp=ygUNZGphbmdvIHB5dGhvbg%3D%3D",
                      },
                      {
                        name: "W3Schools Django Tutorial",
                        url: "https://www.w3schools.com/django/",
                      },
                    ],
                    info:
                      "<p>Django is een high-level web framework geschreven in Python dat snel en efficiënt webapplicaties ontwikkelen mogelijk maakt. Het volgt het 'Don't Repeat Yourself' (DRY) principe en streeft naar een clean en pragmatische codebase.</p>" +
                      "<br>" +
                      "<p>Met Django kun je snel databases modelleren, views definiëren, URL-routes instellen en formulieren maken. Het bevat ook een krachtig beheerderspaneel waarmee je de inhoud van je applicatie kunt beheren.</p>" +
                      "<p>Django REST Framework breidt Django uit om de ontwikkeling van API's te vergemakkelijken, waardoor je gemakkelijk RESTful API's kunt bouwen met Django.</p>" +
                      "<p>Een basiskennis van Python is handig bij het werken met Django, en het begrijpen van het MVC (Model-View-Controller) ontwerppatroon kan ook nuttig zijn. De Django-documentatie is een uitstekende bron om te leren hoe je het framework moet gebruiken.</p>",
                  },
                  {
                    name: "Flask",
                    description:
                      "Flask is een micro webframework geschreven in Python. Het is eenvoudig, flexibel en wordt vaak gebruikt voor het bouwen van webapplicaties en API's.",
                    color: "bg-emerald-700",
                    image:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Flask_logo.svg/1200px-Flask_logo.svg.png",
                    sources: [
                      {
                        name: "Flask Beginners Tutorial",
                        url: "https://www.youtube.com/watch?v=Z1RJmh_OqeA&pp=ygUFZmxhc2s%3D",
                      },
                      {
                        name: "Maak een web-applicatie met Flask",
                        url: "https://www.digitalocean.com/community/tutorials/how-to-make-a-web-application-using-flask-in-python-3",
                      },
                      {
                        name: "Flask User's Guide",
                        url: "https://flask.palletsprojects.com/en/3.0.x/",
                      },
                    ],
                    info:
                      "<p>Flask is een micro webframework geschreven in Python. Het is eenvoudig, flexibel en wordt vaak gebruikt voor het bouwen van webapplicaties en API's. Flask volgt het principe van 'keep it simple', waardoor ontwikkelaars snel en efficiënt webapplicaties kunnen ontwikkelen.</p>" +
                      "<br>" +
                      "<p>Met Flask kunnen ontwikkelaars routes definiëren, templates gebruiken voor het renderen van HTML-pagina's, en eenvoudig integreren met databases. Het is ideaal voor zowel beginners als gevorderde ontwikkelaars vanwege zijn eenvoudige syntax en krachtige mogelijkheden.</p>" +
                      "<p>Belangrijke concepten bij het werken met Flask zijn routes, templates, en het gebruik van extensies voor extra functionaliteiten. Flask wordt vaak gebruikt voor zowel het bouwen van volledige webapplicaties als het maken van RESTful API's.</p>" +
                      "<p>Raadpleeg de officiële Flask-documentatie voor gedetailleerde informatie over het gebruik van het framework en bekijk tutorials om je vaardigheden te ontwikkelen.</p>",
                  },
                  {
                    name: "FastAPI",
                    description:
                      "FastAPI is een modern, snel (high-performance), webframework voor het bouwen van API's met Python 3.7+ gebaseerd op standaarden zoals typehints.",
                    color: "bg-emerald-700",
                    image:
                      "https://miro.medium.com/v2/resize:fit:1023/1*du7p50wS_fIsaC_lR18qsg.png",
                    sources: [
                      {
                        name: "FastAPI Introductie",
                        url: "https://www.youtube.com/watch?v=0RS9W8MtZe4&pp=ygUHZmFzdGFwaQ%3D%3D",
                      },
                      {
                        name: "FastAPI Beginnerscursus",
                        url: "https://www.youtube.com/watch?v=tLKKmouUams&pp=ygUHZmFzdGFwaQ%3D%3D",
                      },
                      {
                        name: "FastAPI Officiele Tutorial",
                        url: "https://fastapi.tiangolo.com/tutorial/first-steps/",
                      },
                    ],
                    info:
                      "<p>FastAPI is een modern, snel (high-performance), webframework voor het bouwen van API's met Python 3.7+ gebaseerd op standaarden zoals typehints. Het is ontworpen om zowel eenvoudig als krachtig te zijn en maakt gebruik van de nieuwste Python-functies om automatische documentatie en validatie van API's te bieden.</p>" +
                      "<br>" +
                      "<p>Met FastAPI kunnen ontwikkelaars snel en efficiënt API's bouwen met behulp van de standaard Python type hints voor het valideren van gegevens. Het framework is gebouwd bovenop Starlette en maakt gebruik van het asynchrone programmeermodel van Python voor optimale prestaties.</p>" +
                      "<p>Belangrijke concepten bij het werken met FastAPI zijn het definiëren van routes met Python type hints, het gebruik van dependency injection voor geavanceerdere functionaliteit, en het begrijpen van asynchrone programmeerpatronen.</p>" +
                      "<p>Raadpleeg de officiële FastAPI-documentatie voor gedetailleerde informatie over het gebruik van het framework en bekijk tutorials om je vaardigheden te ontwikkelen.</p>",
                  },
                ],
              },
              {
                name: "C#",
                description: "",
                color: "bg-emerald-700",
                children: [
                  {
                    name: "ASP.NET",
                    description:
                      "ASP.NET is een framework voor het bouwen van moderne, dynamische webapplicaties met behulp van C++ als programmeertaal.",
                    color: "bg-emerald-700",
                    image:
                      "https://www.simplilearn.com/ice9/free_resources_article_thumb/ASP.NET_logo.jpg",
                    sources: [
                      {
                        name: "Wat is ASP.NET",
                        url: "https://dotnet.microsoft.com/en-us/learn/aspnet/what-is-aspnet",
                      },
                      {
                        name: "ASP.NET Documentation",
                        url: "https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-7.0&WT.mc_id=dotnet-35129-website",
                      },
                      {
                        name: "ASP.NET Crash Cource",
                        url: "https://www.youtube.com/watch?v=BfEjDD8mWYg&pp=ygUHYXNwLm5ldA%3D%3D",
                      },
                    ],
                    info:
                      "<p>ASP.NET is een framework voor het bouwen van moderne, dynamische webapplicaties met behulp van C++ als programmeertaal. Het biedt een breed scala aan tools en bibliotheken om webapplicaties te ontwikkelen, waaronder ondersteuning voor het Model-View-Controller (MVC) ontwerppatroon.</p>" +
                      "<br>" +
                      "<p>C++ wordt vaak gebruikt in combinatie met ASP.NET om krachtige en efficiënte webapplicaties te bouwen. ASP.NET ondersteunt zowel Web Forms als het moderne MVC-framework, waardoor ontwikkelaars flexibele opties hebben voor het bouwen van webapplicaties.</p>" +
                      "<p>Om met C++ en ASP.NET te werken, is het belangrijk om vertrouwd te raken met zowel C++-programmering als de concepten en tools van ASP.NET. Kennis van het .NET-framework en het gebruik van Visual Studio als ontwikkelomgeving kan ook nuttig zijn.</p>" +
                      "<p>Raadpleeg de ASP.NET-documentatie voor gedetailleerde informatie over het gebruik van het framework, en zoek naar C++-tutorials om je te helpen bij het ontwikkelen van je vaardigheden in deze programmeertaal.</p>",
                  },
                  {
                    name: ".NET",
                    description:
                      ".NET is een veelzijdig softwareframework dat ontwikkelaars in staat stelt krachtige en platformonafhankelijke applicaties te bouwen. Het biedt een breed scala aan tools, programmeertalen en bibliotheken die de ontwikkeling vereenvoudigen en de productiviteit verhogen.",
                    image: "https://barnes.nl/wp-content/uploads/2023/04/net_wallp.jpg",
                    color: "bg-emerald-700",
                    sources: [
                      {
                        name: ".NET Website",
                        url: "https://learn.microsoft.com/en-us/dotnet/",
                      },
                      {
                        name: "What is .NET? What's C# and F#? What's the .NET Ecosystem? .NET Core Explained, what can .NET build?",
                        url: "https://youtu.be/bEfBfBQq7EE",
                      },
                    ],
                    info: '<p class="mt-4">.NET is een softwareframework dat is ontwikkeld door Microsoft. Het biedt een platform voor het bouwen, implementeren en uitvoeren van verschillende soorten toepassingen, variërend van desktopapplicaties tot webapplicaties en zelfs mobiele apps. Het framework bestaat uit een reeks tools, programmeertalen en bibliotheken die ontwikkelaars helpen bij het creëren van krachtige en schaalbare software.</p><p class="mt-4">Een van de belangrijkste kenmerken van .NET is dat het een platformonafhankelijk framework is. Dit betekent dat ontwikkelaars applicaties kunnen schrijven met behulp van verschillende programmeertalen, zoals C#, VB.NET en F#, en deze applicaties kunnen vervolgens op verschillende platforms, zoals Windows, macOS en Linux, kunnen worden uitgevoerd. Dit wordt mogelijk gemaakt door de Common Language Runtime (CLR), een uitvoeringsomgeving binnen .NET die verantwoordelijk is voor het compileren en uitvoeren van de code.</p><p class="mt-4">Daarnaast biedt .NET een uitgebreide set van klassenbibliotheken, bekend als de .NET Framework Class Library, die een breed scala aan functionaliteiten en hulpmiddelen bieden voor het ontwikkelen van applicaties. Deze bibliotheken bevatten ondersteuning voor taken zoals bestandsbeheer, netwerkcommunicatie, gegevensbeheer, beveiliging en nog veel meer, waardoor ontwikkelaars hun applicaties efficiënt kunnen bouwen zonder vanaf nul te hoeven beginnen.</p><p class="mt-4">Met de opkomst van cloud computing heeft Microsoft ook .NET uitgebreid naar het Azure-platform, waardoor ontwikkelaars cloudgebaseerde applicaties kunnen bouwen en implementeren met behulp van .NET-technologieën.</p>',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "App Development",
        description: "Ontwikkelen voor mobiele apparaten",
        color: "bg-pink-700",
        icon: "apps-outline",
        iconColor: "text-pink-800",
        children: [
          {
            name: "JavaScript",
            description:
              "JavaScript is een objectgeoriënteerde programmeertaal die gebruikt wordt voor web development en app development. Het is ontworpen om het allemaal gemakkelijker en aantrekkelijker te maken",
            image:
              "https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto",
            color: "bg-pink-700",
            sources: [
              {
                name: "Toekomst van JavaScript",
                url: "https://teamcubate.com/blog-nl/toekomst-van-javascript-ontwikkeling",
              },
              {
                name: "JavaScript Website",
                url: "https://www.javascript.com/",
              },
              {
                name: "Beginners tutorial over app development met JavaScript",
                url: "https://www.freecodecamp.org/news/build-a-beginner-friendly-javascript-application/",
              },
            ],
            info: "<h3>JavaScript in App Development</h3>\
                      <p>JavaScript is een veelzijdige programmeertaal die een cruciale rol speelt in de ontwikkeling van mobiele apps. Hier zijn enkele aspecten van JavaScript in deze context:</p>\
                      <ul>\
                        <li><strong>Front-end Development:</strong> JavaScript wordt vaak gebruikt voor het ontwerpen van interactieve gebruikersinterfaces in mobiele apps, waardoor ontwikkelaars dynamische en responsieve ervaringen kunnen creëren.</li>\
                        <li><strong>Back-end Development:</strong> Met de opkomst van Node.js wordt JavaScript ook steeds meer toegepast voor server-side ontwikkeling, waardoor ontwikkelaars zowel front-end als back-end met dezelfde taal kunnen behandelen.</li>\
                      </ul><br>\
                      <h4>Pluspunten van JavaScript:</h4>\
                      <ul>\
                        <li>✅ Breed inzetbaar voor zowel front-end als back-end ontwikkeling.</li>\
                        <li>✅ Grote community en uitgebreide ecosysteem.</li>\
                        <li>✅ Asynchrone mogelijkheden verbeteren de prestaties.</li>\
                      </ul><br>\
                      <h4>Minpunten van JavaScript:</h4>\
                      <ul>\
                        <li>❌ Soms inconsistenties tussen browsers kunnen uitdagingen veroorzaken.</li>\
                        <li>❌ Prototypale erfelijkheid kan complex zijn voor nieuwe ontwikkelaars.</li>\
                      </ul><br>\
                      <h4>Actief Gebruikt Voor:</h4>\
                      <p>JavaScript wordt actief gebruikt voor front-end webontwikkeling, server-side ontwikkeling met Node.js, en mobiele app-ontwikkeling met frameworks zoals React Native.</p>",
          },
          {
            name: "Dart",
            description:
              "Dart is een programmeertaal ontwikkeld door Google, met name geschikt voor het bouwen van mobiele, desktop, server en webapplicaties.",
            image:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABFFBMVEUSGiUcKDT///8Adr4AtKkSGicTGScAAAwTGSUAAABJwr0RGiQBp+Hk5OMAABausLOpqasAAAZtcngABhyHio8IEyE+QUwFiLq1trgBuKkEcb8Dpq/V19oZJDAcKTQAABEpZ2gPEBwAd70QJTUVHywAAB5fY2kIEyIBpt4LFSIBs6sRABh/gogDirUNVHPQ0NJJTVMnLTYwNTsVDiIUABoSOEMMmpMLi4IZEiIKdHENQEgZGSMIo5cHtrAMSUoPDSEJfXQOUFAXABIIhKILlLAQQ1wUERULToMEoOAOaIwRGh7BxMcQL0wFgsUGbawDsOYFlNOWnJ1XW2IEm9cIQWoUEhAFmLM4j48SOEssdncFkNZCo59RqhHgAAAMEUlEQVR4nO2dDVfbyBWGBXj0wdiOZSFqwLZi12sh49SGkiablLDLbkhSExpD0ja7//9/VN8aSTPSyBqZE0nv2bN7DkhC8/jeO+/cGZ/ldrakCeB+fG2LFV/DomYFeP6pR8pA22El8nVk0bLi+RoWjYalyUFuG5FlsaphUbISn3qI7FQ8qxoWNavSpKClglmBckyDrgpnVcOiZFWqHOQKhWV70aceH1MVyOqph8ZexbHiS+QZXBXHqmQpaKkoVuXyDK6KY1XDomf11AMrQgWgGpaozxBWAbBK6BlcMUc1LKNncMUcVik9gyvmrErpGVwVwKqGRcmqxDnIsYU1LF+fISyWsMrrGVyxZFVez+CKJavyVnZX7FiV2TO4YsmqzLXdFitWFUDFClbZPYMrNqyeehRbEhNWpfcMrpiwqmFlYFV6z+AqP6sqeAZXuVlVJANt5WVVmaiylJPVU7/+dpUzrqqUhPlgVcczuMrHqiqewdXmrLgKeQZXG5IaVq2229o0rkDFMtDWpqye+r2fRJuxqppncLVZXJXpOyYZtFlcPfVbP5E2iStQw6KOq2qmoKXscVVFz+AqI6oBSI2rEq+BMsKagFQSNawd+6vhabUdAjg6+/slz8Ftvf52lSmuuJSlswgvX/5j9urlqKRzQBZWIGXfGb6+/LnRmF3N3oz4UsYWw7h6e/Pmnw0T1qzRePO64rDS4mp09vNVw4Vl0traCLYoelZJT4GQv7TDyte7s4TYAlG5Py6imRj6CzlFyyqlz3B9/cvV1SxgdTR7d0YeOQC6ikhXDVOFwDIM5y/pBounUbLikvoMPLx8FworJ7ZG5Dv0w6guBoogaKrB1nUYF/7zIYMZmpJVwkcuiq+NX9CocnTVuCa+nii0duNqrTrdgaSwxCU88x7eExg8jo4V0Yua1QCa1erqKBZYjaNfdVKtEGUcLFuLuSEYkFW/TOj4sDQGj6NhlVAdTVbw1VHjCKdXNzwBFsRGlqfORGO1IYnAkhnU+HRUw6Q+AwDXv/0Fqxcvfn9/M8JHZDKs3d25pP+gsJI/5NsPJy+O97A6/nj66V8jiOGVBmt3paj5h8ZtHxaX+EdGd8cnRy+OxzhY48/N5uP7bxjWqbB2WxOVRZ3fMiyQBEsE/P3eSaNBoLXX/Hj677/dgtiw02Httgw9XuXtCYPCY/oXILAEa7WW88BBGqvklszthz0zshqk2PrSbDYtWrH7Alj9Rd/Uoh+jt9AwsHjTvKqqQQHLsF0oGlnQcr4GyONO03IwuSVztzc+PmnMSLQ+nzq0og9BYE0lQRBkWda45UE/ROtACG4DHASGokkCODf95UST2yH3CtS2K6vUQU4XZHghhmEJ9vUQDgab53cSqkHyrSI3ujfL+Im1eCbQsmBZtMiwugoQLXGcqkmHK5TWORIEoi5Nup2Fd9tifSjpvB966nR9YGvdNWmp8rRnXmi52wAW/rEMYSW7HdFKQhdWw6pbmPnwi0nrNE4LC0sUeV3qIqPqSf4NijRdRca8WEo+LLnn/XSlGdLUefhPeFhdpYjIGqSsauHbuzEC6whHa2yHVrMZoRWGhf6mfYjGgG4XdF6Vu7gJodP2iheyqpEmHtWfzF/GYSGfAEtYqVupb+/3EFh4Wo9Nl9Y39GlkWLA9DQa2btuw2st+dMhucLX5KKxnh/6TsbBaaiEFnks2WJYdHYdgYav8H6dNTGyRYQEoPQtGZiea0t0lyTNPAaxF8EssrAclBysirLTZWeTv3Lp0Eqyd47TGLqvTjwOk/pFhmeX5PBjajgGsviLZlE3VCCxEOFidPElIhJV+nuH2PgoL4yDGe49uaJ3+Fbk3CRaUg1LeVUTT+KoPRFh9KQEWz0Vhtdr5eoCkHEzTtw97UVhYB/HZy0NaWJwy9we3dvoqsjfk1cF0uZx2kEhzfAAWlsKjs+HqYTqdXuTsl2JZpXdIoGlH47BwVT4rLGgEE6LbsYNt6/J+15A0VVUVwQgK/ryNg9V6tl6v1RCsnqRa1p85rEH6ph/vJWEUVpzWY9bI4lR/0Asny4B+uNt6kNreBTrvX9HRrOIahrW6kGRNs4Oy8IX0IKmH7Oqt7gVWFFaMlpeH9LCCNmpfsiMcgPZUQdrNUPLL2kqOwVojzbDCYVGdgby9Hx/jYUWr/DhrZImS/8uWBwuYOSUCw9sOktdB7PERWCsJBolRNKw0e2ULiHfHhMhqHIUdxPGXPLC8nwFdk7SL5dTRg8+gL0dhhZZ+BcNK6TO4AtzoPQlWOLbGXh7Sw0LT0L1elZYdrI2PwepJaMFlCMtav0brFfUjb7+OSbAidStbZIliUOBXkrPAlqaEBU8c1kOoH80yssAkAgtQ76qI4u1XEqxZmNaXbLDUwDo8EyxYRtBUSIelgYIiixvshGCl9Rkio/r2dWymm9UpTY4tOw9PJ5TLHagc+CM/aEMz1AVkwZcGqyWFpidmsHgw2AnDovAM6Kh4OxPxsBpHvx+H8pAaFicFbOyckjANPCKsVUGwuMkwDCu1zxAW5ODr90RYaJX/kgWWjnS0rB0e4yKBVQxWTy4CFgCTnTCs7MdyILgFX+//04idc3AchB9b4+YpPazAcDoGXvM9lZlkPad9PPeLWAyWUAisgRNN9r+H9jyY/bwPFOFb7Xn8UIhT5q3YsoPrM3VkiZwcLKPNhR8IZeVckDV7WyK4KAOsjfe4RW7gMPIiK2VvIulRg/39/Ss7lAiZePxIC0sUQ014YLWNA4vak9z9QFHxo20LsEQ3rgJYOTYftf/uW8KFl1Plx7SzoaGFinlHMOEgfn7ehg4sZG1IDWvl+tvsxwLEwRCBNaTpM5CfxQ/3XV3hHYS91dokdUrb9t6nuezTJDgP9UQN3bo2gHWg2W8pckowB6TACgpey25PGMqDmi3CeD+u3MjK4NsxsODl831fmNiyVtKPn/5H2LCYn1/YWnbXkc2uucMGXSmqzs3nAdMUWG2kkSgp5vqyt6uI2QIjYOXA4nKdTxXh2feAlhVes1Bs/fHi093NLURfkeKsg583iH3vLzVJlsEBclUKLHUZXNqbPqxbVvc1Q2gBMBgOQ7C43Id5NZSWk44esKujlze3or0MzQSrr7nv1EZLfmuxCK8SU2BxSvwPKRl6y0gO2rAsz5ATFuQjtExeM5vX7Gr/zzMgwsi5x3RYfegNCbSTrk2BBdtx+9+hPl0KuBCrHW5zzxB67E2Ulh1f1n++Yw4tp8JaGP6sBZG6kx2WDuP3nFPOiCAcV/ZXTHJycl6Kw9ByNNzg5N9aCrYWAJDiTYeWd38arHAWO1pRnsUNPIO/HmQlAq0/zzKf/Oudh0ZjOtXooZDdC69ypdUsczY9iNzbWuo0VYeP5CBLWHx4TvT1/RozUyfAanUupHAFNkcfGXDrUEIii0uGBaRwGq+ASleiY6wYRhbHYWm9xE3UBFit1fpQ0NS46zOtFZKKHU0NYEnWxUiLRo7dK7aRm/tTWadxShAOdoZFwoJnvz6PycB5QKjOD8Kadx8OoSRrOqFVq8qGdZat1e/NJ4Jhmk33vq5drNWp95xprHibpsWQzue9fsv6LGSF7gtCMFqvWMMy32oUE+Fa/1yjJ001DOsQCOHgvJlOmiaY/wiOTfLud56PHJOMfTSi+WkBw/pikHm/Aam+TSVicpAxrKJlHSoQN7WEWb7gEvMMPyQs+2D3ZjdngSXiWf1QsLYknhBXNSyccLW9hoUTqV7VsHAis6phhUXwDDUsjKI9mRpWgkieoYYVE6bPUMMiiugZalgRJXmGGlZE6axqWK5S5sEaFiKKHKxheYrtTdSwSOJT58EaViA6VjUs5zwDFasaFpVnqGE5Su4z1LBQ0XmGGpYj2npVwyLvTdSw4sqCqtqwxGxxVW1YGebBqsPK4hmqDmsDVtWFlckzVBtW6t5EDSsQ2ABVNWGBzJ6hwrCye4bqwqLam6hh2dqcVQVhbeIZKgprM89QUVh5WFUMltUX3TgJKwcrT1xVC1aOebBysDLtTVQdVo7/c33VYOXyDFWDxYBVVWDl9AwVg8UgrioCK7dnqBCs/J6hOrBgfs9QGVgZzzNUGha7uCo/LMCQVelhsWRVelgsWZUbFtMcLDssRl7U1/8B9yhL9/s803gAAAAASUVORK5CYII=",
            color: "bg-pink-700",
            sources: [
              {
                name: "Tutorials voor Dart",
                url: "https://dart-tutorial.com/",
              },
              {
                name: "Dart Website",
                url: "https://dart.dev/",
              },
            ],
            info: "<h3>Dart in App Development</h3>\
                      <p>Dart is een krachtige programmeertaal ontwikkeld door Google, die uitblinkt in de ontwikkeling van diverse soorten applicaties. Hier zijn enkele kenmerken van Dart in de context van app-ontwikkeling:</p>\
                      <ul>\
                        <li><strong>Flutter-framework:</strong> Dart wordt vaak gebruikt in combinatie met het Flutter-framework voor het bouwen van cross-platform mobiele apps met een gedeelde codebase.</li>\
                        <li><strong>Hot Reload:</strong> Dart's hot reload-functie versnelt het ontwikkelingsproces door directe updates mogelijk te maken zonder de app opnieuw te starten.</li>\
                      </ul><br>\
                      <h4>Pluspunten van Dart:</h4>\
                      <ul>\
                        <li>✅ Hot reload verbetert de ontwikkelingsefficiëntie.</li>\
                        <li>✅ Goede performance, met name bij het gebruik van Flutter.</li>\
                        <li>✅ Uitgebreide standaardbibliotheek vergemakkelijkt de ontwikkeling.</li>\
                      </ul><br>\
                      <h4>Minpunten van Dart:</h4>\
                      <ul>\
                        <li>❌ Kleinere community in vergelijking met sommige andere talen.</li>\
                      </ul><br>\
                      <h4>Actief Gebruikt Voor:</h4>\
                      <p>Dart wordt actief gebruikt voor mobiele app-ontwikkeling, vooral in combinatie met het Flutter-framework.</p>",
          },
          {
            name: "Kotlin",
            description:
              "Kotlin is een moderne programmeertaal die interoperabiliteit biedt met Java en vaak wordt gebruikt voor Android-applicatieontwikkeling.",
            image: "https://beecrowd.io/wp-content/uploads/2022/08/Beecrowd-Agosto-3-02-2560.jpg",
            color: "bg-pink-700",
            sources: [
              {
                name: "Kotlin tutorial over android app development",
                url: "https://developer.android.com/courses/android-basics-kotlin/course",
              },
              {
                name: "Kotlin Website",
                url: "https://kotlinlang.org/",
              },
            ],
            info: "<h3>Kotlin in App Development</h3>\
                      <p>Kotlin is een veelgebruikte programmeertaal in de wereld van Android-app-ontwikkeling. Hier zijn enkele aspecten van Kotlin in deze context:</p>\
                      <ul>\
                        <li><strong>Interoperabiliteit:</strong> Kotlin biedt naadloze interoperabiliteit met Java, waardoor ontwikkelaars bestaande Java-code kunnen integreren en migreren.</li>\
                        <li><strong>Android-voorkeur:</strong> Kotlin is officieel ondersteund door Google als een eerste klas programmeertaal voor Android-apps.</li>\
                      </ul><br>\
                      <h4>Pluspunten van Kotlin:</h4>\
                      <ul>\
                        <li>✅ Interoperabiliteit met Java vergemakkelijkt de overgang.</li>\
                        <li>✅ Compacte syntax en nulwaarde-veiligheid verbeteren de codekwaliteit.</li>\
                      </ul><br>\
                      <h4>Minpunten van Kotlin:</h4>\
                      <ul>\
                        <li>❌ Leercurve voor ontwikkelaars die bekend zijn met Java.</li>\
                      </ul><br>\
                      <h4>Actief Gebruikt Voor:</h4>\
                      <p>Kotlin wordt actief gebruikt voor Android-app-ontwikkeling en wordt vaak gekozen als alternatief voor Java.</p>",
          },
          {
            name: "Swift",
            description:
              "Swift is een krachtige en intuïtieve programmeertaal ontwikkeld door Apple, specifiek voor iOS, macOS, watchOS en tvOS-applicatieontwikkeling.",
            image:
              "https://www.fullsail.edu/assets/ext/share/mobile-development-degree-an-early-adopter-of-apples-swift-programming-language-hero.jpg",
            color: "bg-pink-700",
            sources: [
              {
                name: "Documentatie over Swift",
                url: "https://docs.swift.org/swift-book/documentation/the-swift-programming-language/",
              },
              {
                name: "Apple Website over Swift",
                url: "https://developer.apple.com/swift/",
              },
            ],
            info: "<h3>Swift in App Development</h3>\
                      <p>Swift is de officiële programmeertaal van Apple en wordt gebruikt voor de ontwikkeling van apps op iOS, macOS, watchOS en tvOS. Hier zijn enkele kenmerken van Swift in app-ontwikkeling:</p>\
                      <ul>\
                        <li><strong>Performance:</strong> Swift is geoptimaliseerd voor prestaties en biedt een snelle uitvoering van code.</li>\
                        <li><strong>Veiligheid:</strong> De taal is ontworpen met veiligheid in het achterhoofd, waardoor ontwikkelaars robuuste en betrouwbare apps kunnen bouwen.</li>\
                      </ul><br>\
                      <h4>Pluspunten van Swift:</h4>\
                      <ul>\
                        <li>✅ Snelheid en efficiëntie in vergelijking met Objective-C.</li>\
                        <li>✅ Actieve ontwikkeling en ondersteuning door Apple.</li>\
                      </ul><br>\
                      <h4>Minpunten van Swift:</h4>\
                      <ul>\
                        <li>❌ Beperkte interoperabiliteit buiten het Apple-ecosysteem.</li>\
                      </ul><br>\
                      <h4>Actief Gebruikt Voor:</h4>\
                      <p>Swift wordt actief gebruikt voor iOS-app-ontwikkeling, macOS-app-ontwikkeling en andere Apple-platforms.</p>",
          },
        ],
      },
      {
        name: "Game Development",
        description: "Spellen ontwikkelen",
        color: "bg-pink-700",
        icon: "game-controller-outline",
        iconColor: "text-pink-800",
        children: [
          {
            name: "Unity",
            description:
              "Unity is een krachtige en veelgebruikte game development engine die geschikt is voor het maken van zowel 2D- als 3D-games. Het biedt een gebruiksvriendelijke interface en ondersteunt meerdere platforms.",
            image:
              "https://media.licdn.com/dms/image/sync/D5627AQEzdrhecvbbmA/articleshare-shrink_800/0/1703185571987?e=1703822400&v=beta&t=JElNFVzhY9XgKuM4NSAQahP_lAlJMqz7eWroeESoJYM",
            color: "bg-pink-700",
            sources: [
              {
                name: "Unity Website",
                url: "https://unity.com/",
              },
              {
                name: "Unity Learning Resources",
                url: "https://learn.unity.com/",
              },
            ],
            info: "<h3>Unity in Game Development</h3>\
                      <p>Unity is een populaire keuze voor game-ontwikkelaars vanwege zijn flexibiliteit en uitgebreide mogelijkheden. Enkele kenmerken van Unity zijn:</p>\
                      <ul>\
                        <li><strong>Platformonafhankelijkheid:</strong> Unity ondersteunt het ontwikkelen van games voor verschillende platforms, waaronder iOS, Android, Windows, Mac, Linux, en meer.</li>\
                        <li><strong>Asset Store:</strong> De Unity Asset Store biedt een enorme verzameling van assets, tools en extensies om het ontwikkelingsproces te versnellen.</li>\
                      </ul><br>\
                      <h4>Pluspunten van Unity:</h4>\
                      <ul>\
                        <li>✅ Gebruiksvriendelijke interface, ideaal voor beginners.</li>\
                        <li>✅ Grote community en uitgebreide documentatie.</li>\
                        <li>✅ Krachtige ondersteuning voor zowel 2D- als 3D-game development.</li>\
                      </ul><br>\
                      <h4>Minpunten van Unity:</h4>\
                      <ul>\
                        <li>❌ Kan als zwaar worden ervaren voor bepaalde projecten.</li>\
                        <li>❌ Sommige geavanceerde functies vereisen Pro-licentie.</li>\
                      </ul><br>\
                      <h4>Actief Gebruikt Voor:</h4>\
                      <p>Unity wordt actief gebruikt voor de ontwikkeling van mobiele games, pc-games, consolegames en augmented reality (AR) en virtual reality (VR) ervaringen.</p>",
          },
          {
            name: "Unreal Engine",
            description:
              "Unreal Engine is een krachtige game engine ontwikkeld door Epic Games. Het staat bekend om zijn fotorealistische graphics en wordt vaak gebruikt voor high-end game-ontwikkeling.",
            image:
              "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/06/unreal-engine-connect-featured-img.jpg",
            color: "bg-pink-700",
            sources: [
              {
                name: "Unreal Engine Website",
                url: "https://www.unrealengine.com/",
              },
              {
                name: "Unreal Online Learning",
                url: "https://www.unrealengine.com/onlinelearning",
              },
            ],
            info: "<h3>Unreal Engine in Game Development</h3>\
                      <p>Unreal Engine is een favoriet onder ontwikkelaars die streven naar hoogwaardige grafische weergave en geavanceerde functionaliteit. Enkele kenmerken van Unreal Engine zijn:</p>\
                      <ul>\
                        <li><strong>Grafische pracht:</strong> Unreal Engine staat bekend om zijn indrukwekkende visuele effecten en fotorealistische graphics.</li>\
                        <li><strong>Blueprint Visual Scripting:</strong> Een visuele scriptingtaal waarmee ontwikkelaars games kunnen maken zonder traditioneel programmeren.</li>\
                      </ul><br>\
                      <h4>Pluspunten van Unreal Engine:</h4>\
                      <ul>\
                        <li>✅ Uitzonderlijke grafische kwaliteit en renderingmogelijkheden.</li>\
                        <li>✅ Krachtige tools voor game-ontwikkeling en simulatie.</li>\
                        <li>✅ Actieve community en regelmatige updates.</li>\
                      </ul><br>\
                      <h4>Minpunten van Unreal Engine:</h4>\
                      <ul>\
                        <li>❌ Steilere leercurve, vooral voor beginners.</li>\
                        <li>❌ Vereist meer systeembronnen vanwege geavanceerde graphics.</li>\
                      </ul><br>\
                      <h4>Actief Gebruikt Voor:</h4>\
                      <p>Unreal Engine wordt gebruikt voor de ontwikkeling van high-end games, virtual reality (VR) en architecturale visualisaties.</p>",
          },
          {
            name: "Godot",
            description:
              "Godot is een open-source game engine die bekend staat om zijn flexibiliteit, lichte systeemvereisten en gebruiksgemak. Het is geschikt voor zowel 2D- als 3D-game-ontwikkeling.",
            image:
              "https://cdn1.epicgames.com/offer/916bd3319edc4e0bbb57ed7e04ad851d/EGS_GodotEngine_TheGodotEngine_S1_2560x1440-44362dbc2924336fe280c96a8c1e2342",
            color: "bg-pink-700",
            sources: [
              {
                name: "Godot Engine Website",
                url: "https://godotengine.org/",
              },
              {
                name: "Godot Documentation",
                url: "https://docs.godotengine.org/",
              },
            ],
            info: "<h3>Godot in Game Development</h3>\
                      <p>Godot is een game engine die bekend staat om zijn gebruiksgemak en open-source karakter. Enkele kenmerken van Godot zijn:</p>\
                      <ul>\
                        <li><strong>Open Source:</strong> Godot is volledig gratis en open-source, waardoor het toegankelijk is voor een breed publiek.</li>\
                        <li><strong>Scene System:</strong> Het scene-systeem van Godot maakt het eenvoudig om complexe game-omgevingen te organiseren.</li>\
                      </ul><br>\
                      <h4>Pluspunten van Godot:</h4>\
                      <ul>\
                        <li>✅ Gratis en open-source met een actieve community.</li>\
                        <li>✅ Geschikt voor zowel 2D- als 3D-game-ontwikkeling.</li>\
                        <li>✅ Lichtgewicht en snelle prestaties, zelfs op oudere hardware.</li>\
                      </ul><br>\
                      <h4>Minpunten van Godot:</h4>\
                      <ul>\
                        <li>❌ Minder geavanceerde grafische mogelijkheden vergeleken met sommige andere engines.</li>\
                        <li>❌ Kleiner ecosysteem van beschikbare assets in vergelijking met grotere engines.</li>\
                      </ul><br>\
                      <h4>Actief Gebruikt Voor:</h4>\
                      <p>Godot wordt gebruikt voor zowel indie-games als educatieve projecten en staat bekend om zijn flexibiliteit en toegankelijkheid.</p>",
          },
        ],
      },
      {
        name: "Data Science/Machine Learning/AI",
        description: "Iets laten denken door het te laten leren",
        color: "bg-orange-700",
        icon: "analytics-outline",
        iconColor: "text-orange-800",
        children: [
          {
            name: "Python",
            description:
              "Python is een veelgebruikte programmeertaal in de wereld van data science, machine learning en kunstmatige intelligentie.",
            color: "bg-orange-700",
            children: [
              {
                name: "TensorFlow",
                description:
                  "TensorFlow kan worden gebruikt voor het bouwen, trainen en implementeren van diverse machine learning modellen, waaronder neurale netwerken.",
                image: "https://i.ytimg.com/vi/yjprpOoH5c8/maxresdefault.jpg",
                color: "bg-orange-700",
                sources: [
                  {
                    name: "TensorFlow Website",
                    url: "https://www.tensorflow.org/",
                  },
                  {
                    name: "TensorFlow GitHub Repository",
                    url: "https://github.com/tensorflow/tensorflow",
                  },
                ],
                info: "<h3>TensorFlow in Data Science/Machine Learning</h3>\
                          <p>TensorFlow is een krachtige open source machine learning library ontwikkeld door Google. Het wordt veel gebruikt voor diverse machine learning taken, waaronder:</p>\
                          <ul>\
                            <li><strong>Bouwen van Neurale Netwerken:</strong> TensorFlow biedt een flexibele omgeving voor het construeren van complexe neurale netwerken.</li>\
                            <li><strong>Model Training:</strong> Het stelt ontwikkelaars in staat modellen te trainen op grote datasets met behulp van geavanceerde optimalisatie-algoritmen.</li>\
                            <li><strong>Implementatie:</strong> TensorFlow-modellen kunnen gemakkelijk worden geïmplementeerd in verschillende omgevingen, waaronder mobiele apparaten en servers.</li>\
                          </ul>",
              },
              {
                name: "PyTorch",
                description:
                  "PyTorch is een open source machine learning library voor Python, gebaseerd op Torch, een C++ library voor machine learning.",
                image: "https://miro.medium.com/v2/resize:fit:1400/1*N3uX6Yd6YeVCc4hxcnprAg.png",
                color: "bg-orange-700",
                sources: [
                  {
                    name: "PyTorch Website",
                    url: "https://pytorch.org/",
                  },
                  {
                    name: "PyTorch GitHub Repository",
                    url: "https://github.com/pytorch/pytorch",
                  },
                ],
                info: "<h3>PyTorch in Data Science/Machine Learning</h3>\
                          <p>PyTorch is een dynamische open source machine learning library die wordt gekenmerkt door zijn flexibiliteit en eenvoud. Enkele kenmerken zijn:</p>\
                          <ul>\
                            <li><strong>Dynamic Computational Graphs:</strong> PyTorch maakt gebruik van dynamische berekeningsgrafieken, waardoor het gemakkelijk is om modellen te bouwen en aan te passen.</li>\
                            <li><strong>Community-Driven:</strong> Met een actieve community is PyTorch ideaal voor experimenteel onderzoek en snelle prototyping.</li>\
                            <li><strong>Libtorch:</strong> PyTorch kan ook worden gebruikt als een C++ API via de Libtorch-library.</li>\
                          </ul>",
              },
              {
                name: "Keras",
                description:
                  "Keras is een open source neural network library voor Python. Het is ontwikkeld om snel en eenvoudig experimenten met deep learning te kunnen uitvoeren.",
                image:
                  "https://pyimagesearch.com/wp-content/uploads/2020/02/keras_autoencoders_header.png",
                color: "bg-orange-700",
                sources: [
                  {
                    name: "Keras Website",
                    url: "https://keras.io/",
                  },
                  {
                    name: "Keras GitHub Repository",
                    url: "https://github.com/keras-team/keras",
                  },
                ],
                info: "<h3>Keras in Data Science/Machine Learning</h3>\
                          <p>Keras is een hoog niveau open source neural network library dat bovenop TensorFlow, Theano, of Microsoft Cognitive Toolkit (CNTK) kan draaien. Hier zijn enkele kenmerken:</p>\
                          <ul>\
                            <li><strong>Eenvoudige API:</strong> Keras biedt een eenvoudige en consistente API die gemakkelijk te begrijpen en te gebruiken is.</li>\
                            <li><strong>Modulariteit:</strong> Het stelt ontwikkelaars in staat om snel en efficiënt neurale netwerken te bouwen door gebruik te maken van modulaire bouwstenen.</li>\
                            <li><strong>Compatibiliteit:</strong> Keras is compatibel met verschillende backends, waaronder TensorFlow en Theano.</li>\
                          </ul>",
              },
              {
                name: "OpenCV",
                description:
                  "OpenCV is een open source computer vision en machine learning software library. Het bevat een reeks algoritmes voor het detecteren van gezichten, objecten, gezichten, etc.",
                image:
                  "https://www.aionlinecourse.com/uploads/blog/description/2022/03/openCV.jpg",
                color: "bg-orange-700",
                sources: [
                  {
                    name: "OpenCV Website",
                    url: "https://opencv.org/",
                  },
                  {
                    name: "OpenCV GitHub Repository",
                    url: "https://github.com/opencv/opencv",
                  },
                ],
                info: "<h3>OpenCV in Data Science/Machine Learning</h3>\
                          <p>OpenCV, oftewel Open Source Computer Vision Library, is een krachtige tool voor het uitvoeren van computer vision-taken. Enkele toepassingen zijn:</p>\
                          <ul>\
                            <li><strong>Objectherkenning:</strong> OpenCV bevat algoritmes voor het detecteren en herkennen van objecten in afbeeldingen en video's.</li>\
                            <li><strong>Beeldverwerking:</strong> Het biedt een breed scala aan functies voor beeldverwerking, zoals filtering en manipulatie.</li>\
                            <li><strong>Machine Learning:</strong> OpenCV integreert ook met machine learning frameworks voor geavanceerde taken.</li>\
                          </ul>",
              },
              {
                name: "Anaconda",
                description:
                  "Anaconda is een gratis en open source distributie van Python en R voor data science en machine learning. Het bevat een reeks van populaire data science packages.",
                image:
                  "https://blog.hubspot.com/hs-fs/hubfs/anaconda_2.webp?width=400&height=210&name=anaconda_2.webp",
                color: "bg-orange-700",
                sources: [
                  {
                    name: "Anaconda Website",
                    url: "https://www.anaconda.com/",
                  },
                  {
                    name: "Anaconda GitHub Repository",
                    url: "https://github.com/ContinuumIO/anaconda",
                  },
                ],
                info: "<h3>Anaconda in Data Science/Machine Learning</h3>\
                          <p>Anaconda is een alles-in-één platform dat is ontworpen voor data science en machine learning. Het biedt:</p>\
                          <ul>\
                            <li><strong>Package Management:</strong> Anaconda maakt het gemakkelijk om packages te beheren en te installeren voor data science en machine learning.</li>\
                            <li><strong>Virtual Environments:</strong> Het ondersteunt het gebruik van geïsoleerde virtuele omgevingen voor projecten.</li>\
                            <li><strong>Populaire Packages:</strong> Anaconda wordt geleverd met populaire packages voor data science, waaronder NumPy, Pandas, en Jupyter Notebooks.</li>\
                          </ul>",
              },
              {
                name: "Pandas",
                description:
                  "Pandas is een open source Python library voor het analyseren van data. Het biedt een eenvoudige manier om data te importeren, te bewerken en te analyseren.",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
                color: "bg-orange-700",
                sources: [
                  {
                    name: "Pandas Website",
                    url: "https://pandas.pydata.org/",
                  },
                  {
                    name: "Pandas GitHub Repository",
                    url: "https://github.com/pandas-dev/pandas",
                  },
                ],
                info: "<h3>Pandas in Data Science/Machine Learning</h3>\
                          <p>Pandas is een krachtige library voor data-analyse in Python. Enkele kenmerken zijn:</p>\
                          <ul>\
                            <li><strong>Datastructuren:</strong> Pandas biedt datastructuren zoals Series en DataFrames voor het efficiënt organiseren van data.</li>\
                            <li><strong>Data Manipulatie:</strong> Het ondersteunt diverse operaties voor het bewerken en manipuleren van data.</li>\
                            <li><strong>CSV en Database Ondersteuning:</strong> Pandas maakt het gemakkelijk om data te importeren en exporteren naar verschillende formaten, waaronder CSV en databases.</li>\
                          </ul>",
              },
              {
                name: "Numpy",
                description:
                  "Numpy is een open source Python library voor het werken met arrays. Het biedt een eenvoudige manier om arrays te maken, te bewerken en te analyseren.",
                image:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/NumPy_logo_2020.svg/1200px-NumPy_logo_2020.svg.png",
                color: "bg-orange-700",
                sources: [
                  {
                    name: "Numpy Website",
                    url: "https://numpy.org/",
                  },
                  {
                    name: "Numpy GitHub Repository",
                    url: "https://github.com/numpy/numpy",
                  },
                ],
                info: "<h3>Numpy in Data Science/Machine Learning</h3>\
                          <p>Numpy is essentieel voor wetenschappelijke computing in Python. Het biedt:</p>\
                          <ul>\
                            <li><strong>Array Operaties:</strong> Numpy maakt het eenvoudig om krachtige operaties uit te voeren op arrays, zoals wiskundige bewerkingen en lineaire algebra.</li>\
                            <li><strong>Efficiënte Datarepresentatie:</strong> Het maakt gebruik van efficiënte datastructuren voor het opslaan van grote hoeveelheden data.</li>\
                            <li><strong>Broadcasting:</strong> Numpy ondersteunt broadcasting, waardoor element-wise operaties mogelijk zijn tussen arrays van verschillende vormen.</li>\
                          </ul>",
              },
              {
                name: "Matplotlib",
                description:
                  "Matplotlib is een open source Python library voor het maken van plots en visualisaties. Het biedt een eenvoudige manier om data te visualiseren.",
                image:
                  "https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2017/07/Python-Matplotlib_.jpg",
                color: "bg-orange-700",
                sources: [
                  {
                    name: "Matplotlib Website",
                    url: "https://matplotlib.org/",
                  },
                  {
                    name: "Matplotlib GitHub Repository",
                    url: "https://github.com/matplotlib/matplotlib",
                  },
                ],
                info: "<h3>Matplotlib in Data Science/Machine Learning</h3>\
                          <p>Matplotlib is een krachtige library voor het maken van visualisaties in Python. Enkele kenmerken zijn:</p>\
                          <ul>\
                            <li><strong>Plots en Grafieken:</strong> Matplotlib ondersteunt een breed scala aan plots en grafieken voor het visualiseren van data.</li>\
                            <li><strong>Aanpasbaarheid:</strong> Het biedt uitgebreide aanpassingsmogelijkheden om de stijl en lay-out van visualisaties te controleren.</li>\
                            <li><strong>Interactiviteit:</strong> Matplotlib kan worden gebruikt voor het maken van interactieve visualisaties in combinatie met andere libraries zoals Jupyter Notebooks.</li>\
                          </ul>",
              },
            ],
          },
          {
            name: "R",
            description:
              "R is een programmeertaal en software om statistische analyses uit te voeren.",
            image:
              "https://www.technotification.com/wp-content/uploads/2018/06/R-prograamming-for-data-science.jpg",
            color: "bg-orange-700",
            sources: [
              {
                name: "R Website",
                url: "https://www.r-project.org/",
              },
              {
                name: "R GitHub Repository",
                url: "https://github.com/wch/r-source",
              },
            ],
            info: "<h3>R in Data Science/Machine Learning</h3>\
                      <p>R is een programmeertaal en omgeving ontworpen voor statistische computing en data-analyse. Enkele kenmerken zijn:</p>\
                      <ul>\
                        <li><strong>Statistische Analyse:</strong> R biedt een breed scala aan statistische en wiskundige functies voor data-analyse.</li>\
                        <li><strong>Community Packages:</strong> De R-community heeft een uitgebreid ecosysteem van packages ontwikkeld voor verschillende statistische toepassingen.</li>\
                        <li><strong>Data Visualisatie:</strong> R biedt krachtige tools zoals ggplot2 voor het maken van complexe en gedetailleerde data visualisaties.</li>\
                      </ul>",
          },
        ],
      },
    ],
  },
  {
    name: "Embedded",
    description:
      "Embedded systemen zijn computerhardware en -software ontworpen voor specifieke taken. Ze vormen de ruggengraat van veel moderne elektronische apparaten.",
    color: "bg-indigo-500",
    icon: "code-working-outline",
    iconColor: "text-indigo-800",
    children: [
      {
        name: "Beginner",
        description:
          "Start hier als je nieuw bent in de wereld van embedded systemen. We zullen je door de basisbeginselen leiden.",
        color: "bg-indigo-700",
        children: [
          {
            name: "Arduino",
            description:
              "Arduino is een open-source microcontroller platform voor het maken van interactieve elektronische projecten.",
            color: "bg-cyan-600",
            image: "https://duckduckgo.com/i/55df9b68.png",
            sources: [
              {
                name: "Arduino Tutorial voor Beginner",
                url: "https://www.youtube.com/watch?v=3VRBsXZkO0w",
              },
              {
                name: "Arduino Crash Course",
                url: "https://www.youtube.com/watch?v=09zfRaLEasY",
              },
              {
                name: "Arduino Projecten voor Beginners",
                url: "https://www.youtube.com/watch?v=U2uH-jrsSxs",
              },
            ],
            info: "<p>Als je nieuw bent in de wereld van elektronica en programmeren, dan is Arduino een geweldig startpunt. Laat me je een korte introductie geven. Arduino is eigenlijk een open-source elektronica platform. Met 'open-source' bedoel ik dat de ontwerpen van de hardware vrij beschikbaar zijn, en de software is gratis te gebruiken en aan te passen. Het is gebaseerd op gebruiksvriendelijke hardware en software, wat betekent dat het super toegankelijk is, zelfs als je geen techneut bent.<br> De hardware bestaat uit een printplaat met een microcontroller (dat is een soort mini-computer) en een aantal aansluitingen waar je andere elektronische componenten aan kunt koppelen, zoals sensoren, LED's, en motoren. De software is een programmeeromgeving waar je code kunt schrijven om de hardware aan te sturen. Je schrijft de code op je computer, en dan upload je het naar de Arduino. <br>Wat cool is aan Arduino, is dat je er allerlei creatieve projecten mee kunt maken. Van simpele dingen zoals het laten knipperen van een LED-lampje, tot complexere projecten zoals robots, weerstations, en zelfs videogames!</p>",
          },
          {
            name: "Raspberry Pi",
            description:
              "De Raspberry Pi is een kleine, maar krachtige mini-computer die je kunt gebruiken om te leren programmeren.",
            color: "bg-red-700",
            image: "https://duckduckgo.com/i/0c1be8ce.png",
            sources: [
              {
                name: "Raspberry Pi voor Beginners",
                url: "https://www.youtube.com/watch?v=rp3qN-kDwDI",
              },
              {
                name: "Raspberry Pi - Eerste Installatie en Setup",
                url: "https://www.youtube.com/watch?v=J024soVgEeM",
              },
              {
                name: "5 Leuke Projecten voor je Raspberry Pi",
                url: "https://www.youtube.com/watch?v=8qSsP2w6bOo",
              },
            ],
            info: "<p>Stel je voor dat je een hele computer hebt, maar dan in de grootte van een creditcard! 🤯 Dat is precies wat een Raspberry Pi is. Het is een minicomputer die je kunt gebruiken voor allerlei geweldige projecten, zoals het maken van je eigen videogames, het bouwen van een weerstation of zelfs het programmeren van een robot! 🤖<br>Laten we het even opdelen:<br>Klein maar Krachtig: Ondanks zijn kleine formaat, is de Raspberry Pi behoorlijk krachtig. Je kunt er een besturingssysteem op installeren, het aansluiten op een monitor, en het gebruiken zoals je een normale computer zou gebruiken.<br>Leer Programmeren: Het is een geweldig hulpmiddel om te leren programmeren. Je kunt talen zoals Python en Scratch gebruiken om je eigen programma's en games te maken.<br>Doe-het-zelf Projecten: Van het maken van een thuisbioscoop tot het bouwen van een beveiligingscamera, de mogelijkheden zijn eindeloos. Het is perfect voor mensen die graag knutselen en nieuwe dingen bouwen.</p>",
          },
          {
            name: "M5",
            description:
              "De M5Stack is een modulair, stapelbaar, schaalbaar en draagbaar apparaat dat is uitgerust met ESP32.",
            color: "bg-indigo-700",
            image: "https://static-cdn.m5stack.com/resource/public/assets/m5logo2022.svg",
            sources: [
              {
                name: "M5Stack UiFlow for Beginners - Lesson 01 - Hello World",
                url: "https://www.youtube.com/watch?v=QDeYsroZQeI",
              },
            ],
            info: "<p>M5 is eigenlijk een term die vaak wordt geassocieerd met M5Stack, een modulair en stapelbaar ontwikkelingskit dat wordt gebruikt voor het bouwen van IoT (Internet of Things) toepassingen. Het is gebaseerd op de ESP32-chip en ondersteunt MicroPython en Arduino, wat betekent dat je het kunt programmeren met behulp van Python of de Arduino-taal. Het is geweldig voor beginners omdat het een gebruiksvriendelijke IDE heeft genaamd UiFlow, waarmee je gemakkelijk code kunt schrijven en je projecten kunt visualiseren. Bovendien is het modulaire ontwerp handig omdat je verschillende eenheden kunt stapelen om verschillende functies toe te voegen aan je projecten. Als je geïnteresseerd bent in het leren van M5, raad ik je aan om te beginnen met de YouTube-gids die ik hierboven heb vermeld. Het is een beginnersles die je laat zien hoe je aan de slag kunt gaan met M5Stack en UiFlow. Veel succes met je leerreis!</p>",
          },
          {
            name: "ESP32",
            description:
              "De ESP32 is een krachtige microcontroller met uitgebreide IoT functionaliteiten, waaronder ingebouwde WiFi en Bluetooth, en ondersteuning voor diverse communicatieprotocollen.",
            color: "bg-red-600",
            image: "https://duckduckgo.com/i/5e1e9c38.jpg",
            sources: [
              {
                name: "A beginner’s guide to ESP32 | Hardware & coding basics + Wi-Fi server demo",
                url: "https://ln.keymate.ai/uulx6t",
              },
            ],
            info: "<p>De ESP32 is een kleine, krachtige microcontroller met ingebouwde Wi-Fi en Bluetooth. Het is als een minicomputer die je kunt programmeren om verschillende taken uit te voeren, zoals het lezen van sensoren, het besturen van motoren, en zelfs het verbinden met het internet!</p><p>Programmeren is een essentieel onderdeel van het werken met de ESP32. Je schrijft code (meestal in de programmeertaal C of Python) om de ESP32 te vertellen wat het moet doen. Deze code wordt vervolgens geüpload naar de ESP32, en voilà, je hebt je eigen op maat gemaakte elektronische gadget!</p><p>Als je wilt leren hoe je aan de slag kunt gaan met de ESP32, raad ik je aan om de volgende YouTube-gids te bekijken: <a href='https://ln.keymate.ai/uulx6t'>A beginner’s guide to ESP32 | Hardware & coding basics + Wi-Fi server demo</a>. Het is een geweldige introductie tot de hardware en de basisprincipes van het programmeren van de ESP32.</p><p>Veel succes en veel plezier met het leren!</p>",
          },
        ],
      },
      {
        name: "Gevorderd",
        description:
          "Als je al ervaring hebt met embedded systemen, kan je hier meer geavanceerde projecten en technieken ontdekken.",
        color: "bg-[#2088cf]",
        children: [
          {
            name: "Arduino",
            description:
              "Arduino is een open-source microcontroller platform voor het maken van interactieve elektronische projecten.",
            color: "bg-cyan-600",
            image: "https://duckduckgo.com/i/55df9b68.png",
            sources: [
              {
                name: "Top 10 geavanceerde projecten met Arduino",
                url: "https://www.youtube.com/watch?v=6JNUpGN_XpY",
              },
              {
                name: "Computer Vision met Arduino - 2 uur durende cursus",
                url: "https://www.youtube.com/watch?v=oCMOYS71NIU",
              },
              {
                name: "Top 5 geavanceerde Arduino DIY-projecten",
                url: "https://www.youtube.com/watch?v=QZOLb0xHB_Q",
              },
            ],
            info: "<p>Arduino is een open-source elektronica-platform dat eenvoudig te gebruiken hardware en software biedt. Het is bedoeld voor iedereen die geïnteresseerd is in het maken en ontwerpen van slimme en creatieve objecten die kunnen reageren op de fysieke wereld. Voor gevorderde studenten die al ervaring hebben met Arduino, zijn er tal van complexe projecten die je kunt uitproberen. Deze projecten omvatten geavanceerde concepten zoals computer vision, robotica, en IoT (Internet of Things). De bovenstaande YouTube-links bevatten enkele van de meest interessante en geavanceerde Arduino-projecten die je kunt uitproberen om je vaardigheden naar een hoger niveau te tillen.</p>",
          },
          {
            name: "Raspberry Pi",
            description:
              "De Raspberry Pi is een kleine, maar krachtige mini-computer die kan worden gebruikt voor geavanceerde programmering en complexe projecten.",
            color: "bg-red-700",
            image: "https://duckduckgo.com/i/0c1be8ce.png",
            sources: [
              {
                name: "Raspberry Pi 4 Extreme Cooling",
                url: "https://www.youtube.com/watch?v=RxB8IYraHtQ",
              },
              {
                name: "Raspberry Pi Home Automation Project",
                url: "https://www.youtube.com/watch?v=9T6Wf2tlGT4",
              },
              {
                name: "Raspberry Pi Cluster Computing",
                url: "https://www.youtube.com/watch?v=uX6Q4QnGXbI",
              },
            ],
            info: "<p>Als je op zoek bent naar manieren om nog dieper in de Raspberry Pi-wereld te duiken, heb ik hier drie handige YouTube-links voor je. De eerste video, laat je zien hoe je je Raspberry Pi koel kunt houden tijdens intensief gebruik, wat essentieel is voor geavanceerde projecten. De tweede video, is perfect als je geïnteresseerd bent in het automatiseren van je huis met behulp van Raspberry Pi. Tot slot, als je geïnteresseerd bent in het opzetten van een cluster van Raspberry Pi's voor parallelle verwerking, bekijk dan de 3e video. Veel succes en veel plezier met je Raspberry Pi-avonturen!</p>",
          },
          {
            name: "M5",
            description:
              "De M5Stack is een modulair, stapelbaar, schaalbaar en draagbaar apparaat dat krachtig genoeg is voor professionele ontwikkeling en flexibel genoeg voor doe-het-zelf projecten.",
            color: "bg-indigo-700",
            image: "https://static-cdn.m5stack.com/resource/public/assets/m5logo2022.svg",
            sources: [
              {
                name: "Geavanceerde M5Stack programmering",
                url: "https://voorbeeld-link-naar-geavanceerde-m5stack-programmering",
              },
              {
                name: "Complexe M5Stack projecten",
                url: "https://voorbeeld-link-naar-complexe-m5stack-projecten",
              },
              {
                name: "Hoe debug je een M5Stack programma",
                url: "https://voorbeeld-link-naar-m5stack-debuggen",
              },
            ],
            info: "<p>Als je al ervaring hebt met de M5Stack, dan ben je klaar om de volgende stap te zetten. In deze sectie vind je geavanceerde tutorials en bronnen die ontworpen zijn om je kennis van de M5Stack te verdiepen.</p><p class='mt-6'>Of je nu wilt leren hoe je efficiënter kunt programmeren, complexe projecten wilt bouwen, of gewoon je M5Stack vaardigheden wilt uitbreiden, je zult hier vinden wat je zoekt. Begin vandaag nog met leren!</p>",
          },
          {
            name: "ESP32",
            description:
              "De ESP32 is een krachtige microcontroller met uitgebreide IoT functionaliteiten, waaronder ingebouwde WiFi en Bluetooth, en ondersteuning voor diverse communicatieprotocollen.",
            color: "bg-red-600",
            image: "https://duckduckgo.com/i/5e1e9c38.jpg",
            sources: [
              {
                name: "Introduction to ESP32 - Getting Started",
                url: "https://www.youtube.com/watch?v=IYuYTfO6iOs",
              },
              {
                name: "How to Multitask with FreeRTOS (ESP32 + Arduino series)",
                url: "https://www.youtube.com/watch?v=k_D_Qu0cgu8",
              },
              {
                name: "ESP32 Programming Tutorial for Custom Hardware (GPIO, Serial, SPI, WiFi) - Phil's Lab #91",
                url: "https://www.youtube.com/watch?v=jhjZZkKupkE",
              },
            ],
            info: "<p>De ESP32 is een krachtige microcontroller met ingebouwde Wi-Fi- en Bluetooth-mogelijkheden. Het is ideaal voor IoT-projecten en heeft een lage kosten en een laag energieverbruik. Voor gevorderde studenten die al ervaring hebben met microcontrollers, biedt de ESP32 de mogelijkheid om complexere projecten te ontwikkelen, zoals het maken van web servers, het gebruik van FreeRTOS voor multitasking, en het programmeren van aangepaste hardware. De bovenstaande YouTube-links zijn zorgvuldig geselecteerd om je te helpen dieper in te gaan op geavanceerde onderwerpen met betrekking tot ESP32.</p>",
          },
        ],
      },
    ],
  },
  {
    name: "Security",
    description:
      "Security is het beveiliging van je systemen en netwerken tegen bedreigingen op het internet",
    color: "bg-indigo-500",
    icon: "shield-checkmark-outline",
    iconColor: "text-indigo-800",
    children: [
      {
        name: "Beginner",
        description:
          "Start hier als je nieuw bent in de wereld van security. We zullen je door de basisbeginselen leiden.",
        color: "bg-indigo-700",
        children: [
          {
            name: "Network Security",
            description:
              "Netwerkbeveiliging omvat het beschermen van bruikbaarheid, betrouwbaarheid en integriteit van een netwerk en de gegevens.",
            color: "bg-sky-300",
            sources: [
              {
                name: "Geavanceerde Netwerkbeveiliging en Ethical Hacking",
                url: "https://www.youtube.com/watch?v=un96jAaqPl0",
              },
              {
                name: "Netwerkbeveiliging: Firewalls, VPN's en meer",
                url: "https://www.youtube.com/watch?v=HqPYdKJloDw",
              },
              {
                name: "Intrusion Detection Systemen (IDS) voor Gevorderden",
                url: "https://www.youtube.com/watch?v=8bL2BCiFkTk",
              },
            ],
            info: "<p>Netwerkbeveiliging is een cruciaal aspect in de wereld van informatietechnologie. Het gaat om het beschermen van een computernetwerk tegen ongeautoriseerde toegang, dat a-diefstal, en andere beveiligingsrisico's. Voor een gevorderde student die al ervaring heeft met netwerkbeveiliging, is het belangrijk om dieper in te gaan op geavanceerde concepten zoals Ethical Hacking, Firewalls, VPN's, en Intrusion Detection Systemen (IDS).</p><p>Ethical Hacking helpt je te begrijpen hoe aanvallers denken en werken, zodat je effectieve verdedigingsstrategieën kunt ontwikkelen. Firewalls en VPN's zijn essentiële tools voor het beschermen van de integriteit en privacy van gegevens die over een netwerk worden verzonden. Intrusion Detection Systemen (IDS) zijn gericht op het monitoren van netwerkverkeer om mogelijke incidenten, kwetsbaarheden en dreigingen te identificeren.</p><p>Ik raad je aan om de bovenstaande video's te bekijken om je kennis van deze geavanceerde concepten te verdiepen en je vaardigheden in netwerkbeveiliging te verbeteren.</p>",
          },
          {
            name: "Web Security",
            description:
              "Beveiligingspraktijken om websites en webapplicaties te beschermen tegen cyberbedreigingen.",
            color: "bg-orange-500",
            sources: [
              {
                name: "Webbeveiliging voor beginners",
                url: "https://www.youtube.com/watch?v=7G9epn3BfqE",
              },
              {
                name: "Hoe u uw website kunt beveiligen",
                url: "https://www.youtube.com/watch?v=3gQGqB4ufg8",
              },
              {
                name: "Diepgaande gids voor webbeveiliging",
                url: "https://www.youtube.com/watch?v=K5EYx2oJxXU",
              },
            ],
            info: "<p>Als je geïnteresseerd bent in webbeveiliging maar niet weet waar je moet beginnen, dan heb ik hier een paar handige YouTube-links voor je. Ten eerste is er 'Webbeveiliging voor beginners'. Deze video is geweldig als je helemaal nieuw bent in dit veld, omdat het je een algemeen overzicht geeft van wat webbeveiliging inhoudt. Vervolgens is er 'Hoe u uw website kunt beveiligen'. Deze video is meer gericht op de praktische kant en laat je zien hoe je de beveiliging van een website kunt verbeteren. Tenslotte is er 'Diepgaande gids voor webbeveiliging', die meer geavanceerde onderwerpen behandelt voor als je al wat ervaring hebt opgedaan. Veel succes en veel plezier met leren!</p>",
          },
          {
            name: "Application Security",
            description:
              "Het toepassen van beveiligingsmaatregelen op applicatieniveau om kwetsbaarheden en bedreigingen te voorkomen.",
            color: "bg-lime-500",
            sources: [
              {
                name: "Applicatiebeveiliging voor beginners",
                url: "https://voorbeeld-link-naar-applicatiebeveiliging-voor-beginners",
              },
              {
                name: "Inleiding tot Applicatiebeveiliging",
                url: "https://voorbeeld-link-naar-inleiding-applicatiebeveiliging",
              },
            ],
            info: "<p>Applicatiebeveiliging is een cruciaal aspect van softwareontwikkeling. Deze sectie bevat basisinformatie en bronnen voor beginners over applicatiebeveiliging.</p>",
          },
          {
            name: "Cryptografie",
            description:
              "De praktijk en studie van technieken voor beveiligde communicatie in de aanwezigheid van derden.",
            color: "bg-indigo-700",
            sources: [
              {
                name: "Cryptografie voor beginners",
                url: "https://voorbeeld-link-naar-cryptografie-voor-beginners",
              },
              {
                name: "Inleiding tot Cryptografie",
                url: "https://voorbeeld-link-naar-inleiding-cryptografie",
              },
            ],
            info: "<p>Cryptografie is essentieel voor beveiligde communicatie. Deze sectie bevat basisinformatie en bronnen voor beginners over cryptografie.</p>",
          },
          {
            name: "Penetration Testing",
            description:
              "De praktijk van het testen van een computer, systeem, netwerk of webtoepassing om kwetsbaarheden te vinden die een aanvaller kan uitbuiten.",
            color: "bg-red-800",
            sources: [
              {
                name: "Penetration Testing voor beginners",
                url: "https://voorbeeld-link-naar-penetration-testing-voor-beginners",
              },
              {
                name: "Inleiding tot Penetration Testing",
                url: "https://voorbeeld-link-naar-inleiding-penetration-testing",
              },
            ],
            info: "<p>Penetration Testing is een essentiële vaardigheid voor elke cybersecurity-professional. Deze sectie bevat basisinformatie en bronnen voor beginners over Penetration Testing.</p>",
          },
        ],
      },
      {
        name: "Gevordend",
        description:
          "Als je al ervaring hebt met security, kan je hier meer geavanceerde projecten en technieken ontdekken.",
        color: "bg-indigo-700",
        children: [
          {
            name: "Network Security",
            description: "Geavanceerde netwerkbeveiligingstechnieken en -strategieën.",
            color: "bg-sky-300",
            sources: [
              {
                name: "Netwerkbeveiliging uitgelegd",
                url: "https://www.youtube.com/watch?v=QjNkq4M6Fjw",
              },
              {
                name: "Hoe hackers te slim af te zijn met netwerkbeveiliging",
                url: "https://www.youtube.com/watch?v=2Y2X4rSKQJ8",
              },
              {
                name: "Geavanceerde netwerkbeveiligingstechnieken voor professionals",
                url: "https://www.youtube.com/watch?v=5GgflscOmW8",
              },
            ],
            info: "<p>Netwerkbeveiliging is een cruciaal aspect in de wereld van informatietechnologie. Het gaat om het beschermen van netwerken en de gegevens die erdoorheen stromen tegen ongeautoriseerde toegang, misbruik, diefstal of schade. Dit kan worden bereikt door het implementeren van verschillende beveiligingsmaatregelen en -protocollen. Voor studenten die nieuw zijn in dit onderwerp, is het belangrijk om te beginnen met het begrijpen van de basisprincipes van netwerkbeveiliging. De eerste video, 'Netwerkbeveiliging uitgelegd', is een geweldige plek om te beginnen. Voor degenen die al enige kennis hebben en willen leren hoe ze hun netwerken beter kunnen beveiligen, is de tweede video, 'Hoe hackers te slim af te zijn met netwerkbeveiliging', een uitstekende keuze. Voor gevorderde studenten die op zoek zijn naar geavanceerde technieken en diepgaande kennis, is de derde video, 'Geavanceerde netwerkbeveiligingstechnieken voor professionals', zeer aan te bevelen. Door deze bronnen te verkennen, kunnen studenten hun kennis van netwerkbeveiliging uitbreiden en leren hoe ze robuuste beveiligingssystemen kunnen opzetten en onderhouden.</p>",
          },
          {
            name: "Web Security",
            description: "Geavanceerde technieken en strategieën voor webbeveiliging.",
            color: "bg-orange-500",
            sources: [
              {
                name: "Webbeveiliging Basics: Wat je moet weten",
                url: "https://www.youtube.com/watch?v=opRMrEfAIiI",
              },
              {
                name: "Hoe SSL werkt - De werking van HTTPS uitgelegd",
                url: "https://www.youtube.com/watch?v=iQsKdtjwtYI",
              },
              {
                name: "Web Application Security: Inbreken en Verdedigen",
                url: "https://www.youtube.com/watch?v=3K9N_O8ZzGk",
              },
            ],
            info: "<p>Webbeveiliging, ook bekend als cyberbeveiliging, is een essentieel onderdeel van het ontwikkelen en onderhouden van websites en webapplicaties. Het houdt zich bezig met de bescherming van websites en webapplicaties tegen verschillende beveiligingsrisico's en aanvallen, zoals SQL-injectie, cross-site scripting (XSS), en DDoS-aanvallen. Als je een beginner bent, is het belangrijk om te beginnen met de basisprincipes van webbeveiliging. De video 'Webbeveiliging Basics: Wat je moet weten' is een geweldige plek om te beginnen. Voor degenen die geïnteresseerd zijn in het begrijpen van de beveiliging van gegevens tijdens het transport, is 'Hoe SSL werkt - De werking van HTTPS uitgelegd' een must-watch. Gevorderde studenten die geïnteresseerd zijn in het leren van penetratietesten en verdedigingstechnieken voor webapplicaties moeten zeker kijken naar 'Web Application Security: Inbreken en Verdedigen'. Deze video's zullen je helpen om een solide basis te leggen en je kennis van webbeveiliging te verdiepen.</p>",
          },
          {
            name: "Application Security",
            description: "Geavanceerde technieken en strategieën voor applicatiebeveiliging.",
            color: "bg-lime-500",
            sources: [
              {
                name: "Application security van start tot finish - Michael Kaufmann - NDC Porto 2022",
                url: "https://www.youtube.com/watch?v=Q6cWn4HO3wQ",
              },
              {
                name: "Dynamic Application Security Testing (DAST) - Geavanceerde beveiligingstesten",
                url: "https://www.youtube.com/watch?v=egfVeMfD9hM",
              },
              {
                name: "Shifting Knowledge Left: Bijblijven met moderne Application Security",
                url: "https://www.youtube.com/watch?v=2IqsgSYr4jY",
              },
            ],
            info: "<p>Application Security, oftewel AppSec, is het proces van het implementeren van beveiligingsmaatregelen in de ontwikkelingsfase van een applicatie om kwetsbaarheden en beveiligingsrisico's te minimaliseren. Voor gevorderde studenten die al ervaring hebben met Application Security, is het essentieel om op de hoogte te blijven van de nieuwste trends, technieken en best practices. De eerste video, 'Application security van start tot finish' door Michael Kaufmann, biedt een uitgebreid overzicht van Application Security. De tweede video, 'Dynamic Application Security Testing (DAST) - Geavanceerde beveiligingstesten', gaat dieper in op geavanceerde beveiligingstesten. De derde video, 'Shifting Knowledge Left: Bijblijven met moderne Application Security', bespreekt hoe je je kennis kunt bijwerken en aanpassen aan de snel veranderende landschap van Application Security.</p>",
          },
          {
            name: "Cryptografie",
            description: "Geavanceerde technieken en strategieën voor cryptografie.",
            color: "bg-indigo-700",
            sources: [
              {
                name: "Hoe word je een meesterhacker",
                url: "https://www.youtube.com/watch?v=NE2_Id0I6UM",
              },
              {
                name: "143 kilometer quantumverstrengeling",
                url: "https://www.youtube.com/watch?v=3xQyYdE5hC8",
              },
              {
                name: "Technoloog 259: Een neuraal netwerk op een chip",
                url: "https://www.youtube.com/watch?v=8Ii5A6PV1q4",
              },
            ],
            info: "<p>Cryptografie is een essentieel onderdeel van informatiebeveiliging en wordt gebruikt om gegevens te beveiligen en te beschermen tegen ongeoorloofde toegang. Het is een wetenschap die zich bezighoudt met het versleutelen van informatie, zodat alleen de beoogde ontvanger deze kan ontcijferen en lezen. Voor gevorderde studenten die al ervaring hebben met cryptografie, is het belangrijk om te begrijpen hoe cryptografische algoritmen werken en hoe ze kunnen worden toegepast in real-world scenario's. Dit omvat het begrijpen van openbare en private sleutels, hashfuncties, digitale handtekeningen en de rol van cryptografie in netwerkbeveiliging en privacy. Gevorderde studenten kunnen ook de wiskundige theorieën achter cryptografie verkennen en leren hoe ze cryptografische protocollen kunnen analyseren en ontwikkelen.</p>",
          },
          {
            name: "Penetration Testing",
            description: "Geavanceerde technieken en strategieën voor Penetration Testing.",
            color: "bg-red-800",
            sources: [
              {
                name: "Advanced Penetration Testing Course - Learn Ethical Hacking",
                url: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
              },
              {
                name: "Web Application Penetration Testing Course for 2021",
                url: "https://www.youtube.com/watch?v=4t4kBkMsDbQ",
              },
              {
                name: "Network Penetration Testing (Ethical Hacking) From Scratch",
                url: "https://www.youtube.com/watch?v=HvUYlPrbOa8",
              },
            ],
            info: "<p>Penetration Testing, ook wel bekend als pentesting of ethisch hacken, is een geautoriseerde gesimuleerde cyberaanval op een computersysteem, uitgevoerd om de beveiliging ervan te evalueren. Het doel is om kwetsbaarheden te identificeren, zoals ongepatchte software, onveilige instellingen en risicovolle gedragingen. Gevorderde studenten kunnen zich verdiepen in geavanceerde technieken zoals het gebruik van exploitatie-frameworks, het uitvoeren van netwerkscans, en het begrijpen van geavanceerde persistent threats (APTs). Het is belangrijk om ethische richtlijnen te volgen en ervoor te zorgen dat alle pentesting-activiteiten legaal en geautoriseerd zijn.</p>",
          },
        ],
      },
    ],
  },
];
