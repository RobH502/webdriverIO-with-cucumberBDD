import Page from './page';
import utl from '../../utilities/common-utilities';
import loginPage from './login.page';

class VideoGamesPage extends Page {

    /*
     * define elements
     */

    get videoGamesHeader()            { return $('//*[@class="page-title"]//child::h1'); }
    get videoGamesLink()              { return $('//a[contains(@href, "/video-games")]'); }
    get xboxOneLink()                 { return $('//a[contains(@href, "/xbox-one")]'); }
    get nintendoSwitch()              { return $('//a[contains(@href, "/nintendo-switch")]'); }

    //Xbox One Submenu Items
    get xboxOneConsoles()             { return $('//a[contains(@href, "/xbox-one-consoles")]'); }
    get xboxOneGames()                { return $('//a[contains(@href, "/xbox-one-games")]'); }    
    get xboxOneAccessories()          { return $('//a[contains(@href, "/xbox-one-accessories")]'); }

    //Nintendo Switch Submenu Items
    get nintendoSwitchConsoles()      { return $('//a[contains(@href, "/nintendo-switch-consoles")]'); }
    get nintendoSwitchGames()         { return $('//a[contains(@href, "/nintendo-switch-games")]'); }
    get nintendoSwitchAccessories()   { return $('//a[contains(@href, "/nintendo-switch-accessories")]'); }


    //***********************************************************************************
    /*
     * define or overwrite page methods
     */

    open() {
        super.open('');
    }

    //Hover over a dropdown menu option
    hoverOver(menuOpt) {
        this.videoGamesLink.moveTo();
        switch(menuOpt) {
            case "Video Game":
                this.videoGamesLink.moveTo();
                break;
            case "Xbox One":
                this.xboxOneLink.moveTo();
                break;
            case "Nintendo Switch":
                this.nintendoSwitch.moveTo();
                break;
        }
    }

    //Verifies that the user is on the correct page by checking if the correct respective header is present
    correctHeader(header) {
        //this.videoGamesHeader.waitForDisplayed(10000);
        return this.videoGamesHeader.getText().should.equal(header);
    }

    //***********************************************************************************
    //Click the "Video Game" link
    clickLink() {
        this.videoGamesLink.click();
    }

    //***********************************************************************************
    //Video Games Primary Dropdown Menu
    //Click one of the two primary "Video Game" dropdown menu options
    clickMenuOption(menuOpt) {
        menuOpt === "Xbox One" ? this.xboxOneLink.click() : this.nintendoSwitch.click();
    }

    //***********************************************************************************
    //Xbox One Submenu

    //Click one of the three options in the Xbox One sub-menu
    selectXboxSubmenuOption(menuOpt) {
        this.xboxOneConsoles.moveTo();
        switch(menuOpt) {
            case 'Xbox One Consoles':
                this.xboxOneConsoles.click();
                break;
            case 'Xbox One Games':
                this.xboxOneGames.click();
                break;
            case 'Xbox One Accessories':
                this.xboxOneAccessories.click();
                break;
        }
    }

    //***********************************************************************************
    //Nintendo Switch Submenu

    //Click one of the three options in the Nintendo Switch submenu
    selectSwitchSubmenuOption(menuOpt) {
        this.nintendoSwitchConsoles.moveTo();
        switch(menuOpt) {
            case 'Nintendo Switch Consoles':
                this.nintendoSwitchConsoles.click();
                break;
            case 'Nintendo Switch Games':
                this.nintendoSwitchGames.click();
                break;
            case 'Nintendo Switch Accessories':
                this.nintendoSwitchAccessories.click();
                break;
        }
    }
}

export default new VideoGamesPage();