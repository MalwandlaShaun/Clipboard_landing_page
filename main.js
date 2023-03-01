const logoSrc = "images/logo.svg";
const computerSrc = "images/image-computer.png";
const devicesSrc = "images/image-devices.png";
const blacklistSrc = "images/icon-blacklist.svg";
const textSrc = "images/icon-text.svg";
const previewSrc = "images/icon-preview.svg";
const googleSrc = "images/logo-google.png";
const ibmSrc = "images/logo-ibm.png";
const microsoftSrc = "images/logo-microsoft.png";
const hpSrc = "images/logo-hp.png";
const vectorGraphicsSrc = "images/logo-vector-graphics.png";

const footerLogoSrc = "images/logo.svg";
const footerLinksCol1 = ["Contact Us", "FAQs", "Privacy Policy"];
const footerLinksCol2 = ["Press Kit", "Install Guide"];
const socialMediaIcons = [
  "images/icon-facebook.svg",
  "images/icon-twitter.svg",
  "images/icon-instagram.svg",
];
const attributionText =
  'Bootcamp 2023 by <a href="https://www.mlab.co.za" target="_blank">CodeTribe</a>. Developed by <a href="https://malwandla-codetribe-portfolio.netlify.app/" target="_blank">Malwandla Shaun Hlungwani</a>.';

const landingHTML = `
  <div class="landing ">
    <div class="container">
      <img src="${logoSrc}" alt="logo" />
      <h2>A history of everything you copy</h2>
      <p>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <button>Download for iOS</button>
      <button>Download for Mac</button>
    </div>
  </div>
`;

const trackHTML = `
  <div class="track ">
    <div class="container">
      <h2>Keep track of your snippets</h2>
      <p>
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>
      <div class="holder flex">
        <div class="image">
          <img src="${computerSrc}" alt="image-computer" />
        </div>
        <div class="text">
          <h3>Quick Search</h3>
          <p>
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
          <h3>iCloud Sync</h3>
          <p>Instantly saves and syncs snippets across all your devices.</p>
          <h3>Complete History</h3>
          <p>
            Retrieve any snippets from the first moment you started using the
            app.
          </p>
        </div>
      </div>
    </div>
  </div>
`;

const accessHTML = `
  <div class="access ">
    <div class="container">
      <h2>Access Clipboard anywhere</h2>
      <p>
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </p>
      <img src="${devicesSrc}" alt="image-devices" />
    </div>
  </div>
`;

const superchargeHTML = `<div class="supercharge">
<div class="container">
  <h2>Supercharge your workflow</h2>
  <p>We’ve got the tools to boost your productivity.</p>
  <div class="boxs flex">
    <div class="box">
      <img src="${blacklistSrc}" alt="icon-blacklist" />
      <h3>Create blacklists</h3>
      <p>
        Ensure sensitive information never makes its way to your clipboard
        by excluding certain sources.
      </p>
    </div>
    <div class="box">
      <img src="${textSrc}" alt="icon-text" />
      <h3>Plain text snippets</h3>
      <p>
        Remove unwanted formatting from copied text for a consistent look.
      </p>
    </div>
    <div class="box">
      <img src="${previewSrc}" alt="icon-preview" />
<h3>Sneak preview</h3>
<p>
Quickly preview snippets by hovering over them, without having to
open them.
</p>
</div>
</div>
</div>

  </div>
  <div class="signup fade-in">
    <div class="container">
      <div class="logos">
        <img src="${googleSrc}" alt="logo-google" />
        <img src="${ibmSrc}" alt="logo-ibm" />
        <img src="${microsoftSrc}" alt="logo-microsoft" />
        <img src="${hpSrc}" alt="logo-hp" />
        <img src="${vectorGraphicsSrc}" alt="logo-vector-graphics" />
      </div>
      <h2>Clipboard for iOS and Mac OS</h2>
      <p>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </p>
      <button>Download for iOS</button>
      <button>Download for Mac</button>
    </div>
  </div>
;
`;

const mainHTML = landingHTML + trackHTML + accessHTML + superchargeHTML;
const footerHTML = `
  <div class="footer">
    <div class="container flex">
      <img src="${footerLogoSrc}" alt="logo" />
      <ul>
        ${footerLinksCol1
          .map((link) => `<li class="pointer">${link}</li>`)
          .join("")}
      </ul>
      <ul>
        ${footerLinksCol2
          .map((link) => `<li class="pointer">${link}</li>`)
          .join("")}
      </ul>
      <span></span>
      <ul class="flex">
        ${socialMediaIcons
          .map((iconSrc) => `<li><img src="${iconSrc}" alt="icon" /></li>`)
          .join("")}
      </ul>
    </div>
    <p class="attribution">${attributionText}</p>
  </div>
`;

const fullHTML = `
  ${mainHTML}
  ${footerHTML}
`;

document.body.innerHTML = fullHTML;
