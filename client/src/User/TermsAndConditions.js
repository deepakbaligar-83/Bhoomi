// TermsAndConditions.js

import React from 'react';
import './TermsAndConditions.css';

const termsContent = `
These terms and conditions outline the rules and regulations for the use of Bhoomi website.

By accessing this website, we assume you accept these terms and conditions. Do not continue to use Bhoomi if you do not agree to take all of the terms and conditions stated on this page.

The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and all agreements: "Client," "You," and "Your" refer to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company," "Ourselves," "We," "Our," and "Us," refer to our Company. "Party", "Parties", or "Us" refers to both the Client and ourselves. All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization, and/or he/she or they, are taken as interchangeable and therefore as referring to same.

Cookies

We employ the use of cookies. By accessing Bhoomi, you agreed to use cookies in agreement with the Bhoomi's Privacy Policy.

Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.

License

Unless otherwise stated, Bhoomi and/or its licensors own the intellectual property rights for all material on Bhoomi. All intellectual property rights are reserved. You may access this from Bhoomi for your own personal use subjected to restrictions set in these terms and conditions.

You must not:

- Republish material from Bhoomi
- Sell, rent, or sub-license material from Bhoomi
- Reproduce, duplicate, or copy material from Bhoomi
- Redistribute content from Bhoomi

This Agreement shall begin on the date hereof.

Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Bhoomi does not filter, edit, publish, or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Bhoomi,its agents, and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Bhoomi shall not be liable for the Comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.

Bhoomi reserves the right to monitor all comments and to remove any comments which can be considered inappropriate, offensive, or causes breach of these Terms and Conditions.

You warrant and represent that:

- You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
- The Comments do not invade any intellectual property right, including without limitation copyright, patent, or trademark of any third party;
- The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise unlawful material which is an invasion of privacy
- The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
- You hereby grant Bhoomi a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit any of your Comments in any and all forms, formats, or media.
`;

const splitTermsContent = termsContent.match(/[^ ]+/g).reduce((acc, word) => {
  if (acc.length === 0) {
    return [word];
  } else if (acc[acc.length - 1].split(' ').length < 30) {
    acc[acc.length - 1] += ` ${word}`;
    return acc;
  } else {
    acc.push(word);
    return acc;
  }
}, []).join('\n');

const TermsAndConditions = () => {
  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <div className="terms-content">
        <pre>{splitTermsContent}</pre>
      </div>
    </div>
  );
};

export default TermsAndConditions;
