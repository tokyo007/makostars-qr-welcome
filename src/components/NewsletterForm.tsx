import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const NewsletterForm = () => {
  useEffect(() => {
    // Zoho CRM validation and helper functions
    (window as any).reloadImg37755000000330005 = function() {
      const captcha = document.getElementById('imgid37755000000330005') as HTMLImageElement;
      if (captcha && captcha.src.indexOf('&d') !== -1) {
        captcha.src = captcha.src.substring(0, captcha.src.indexOf('&d')) + '&d' + new Date().getTime();
      } else if (captcha) {
        captcha.src = captcha.src + '&d' + new Date().getTime();
      }
    };

    (window as any).historyBack37755000000330005 = function() {
      const submitBtn = document.querySelector('.formsubmit') as HTMLButtonElement;
      if (submitBtn) submitBtn.removeAttribute('disabled');
      (window as any).reloadImg37755000000330005();
      window.removeEventListener('focus', (window as any).historyBack37755000000330005);
    };

    (window as any).validateEmail37755000000330005 = function() {
      const form = document.forms['WebToLeads37755000000330005' as any];
      const emailFld = form.querySelectorAll('[ftype=email]');
      for (let i = 0; i < emailFld.length; i++) {
        const emailVal = (emailFld[i] as HTMLInputElement).value;
        if (emailVal.replace(/^\s+|\s+$/g, '').length !== 0) {
          const atpos = emailVal.indexOf('@');
          const dotpos = emailVal.lastIndexOf('.');
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert('Please enter a valid email address.');
            (emailFld[i] as HTMLInputElement).focus();
            return false;
          }
        }
      }
      return true;
    };

    (window as any).checkMandatory37755000000330005 = function() {
      const mndFileds = ['First Name', 'Last Name', 'Email', 'City'];
      const fldLangVal = ['First Name (名)', 'Last Name (姓)', 'Email address (メールアドレス)', 'City (町・都市)'];
      
      for (let i = 0; i < mndFileds.length; i++) {
        const fieldObj = (document.forms['WebToLeads37755000000330005' as any] as any)[mndFileds[i]];
        if (fieldObj) {
          if (fieldObj.value.replace(/^\s+|\s+$/g, '').length === 0) {
            if (fieldObj.type === 'file') {
              alert('Please select a file to upload.');
              fieldObj.focus();
              return false;
            }
            alert(fldLangVal[i] + ' cannot be empty.');
            fieldObj.focus();
            return false;
          } else if (fieldObj.nodeName === 'SELECT') {
            if (fieldObj.options[fieldObj.selectedIndex].value === '-None-') {
              alert(fldLangVal[i] + ' cannot be none.');
              fieldObj.focus();
              return false;
            }
          } else if (fieldObj.type === 'checkbox') {
            if (fieldObj.checked === false) {
              alert('Please accept ' + fldLangVal[i]);
              fieldObj.focus();
              return false;
            }
          }
        }
      }

      if (!(window as any).validateEmail37755000000330005()) {
        return false;
      }

      const urlparams = new URLSearchParams(window.location.search);
      if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
        const webform = document.getElementById('webform37755000000330005');
        const service = urlparams.get('service');
        const smarturlfield = document.createElement('input');
        smarturlfield.setAttribute('type', 'hidden');
        smarturlfield.setAttribute('value', service!);
        smarturlfield.setAttribute('name', 'service');
        webform?.appendChild(smarturlfield);
      }

      const submitBtn = document.querySelector('.formsubmit') as HTMLButtonElement;
      if (submitBtn) submitBtn.setAttribute('disabled', 'true');
      window.addEventListener('focus', (window as any).historyBack37755000000330005);
      return true;
    };
  }, []);

  return (
    <div className="w-full">
      <form
        id="webform37755000000330005"
        action="https://crm.zoho.jp/crm/WebToLeadForm"
        name="WebToLeads37755000000330005"
        method="POST"
        onSubmit={() => {
          return (window as any).checkMandatory37755000000330005();
        }}
        acceptCharset="UTF-8"
        className="space-y-6"
      >
        {/* Hidden fields required by Zoho */}
        <input type="text" style={{ display: 'none' }} name="xnQsjsdp" value="64f617e8e312db8c8eec0ff3ca237b9207adc481c04f572c1b709bb42431392d" />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input type="text" style={{ display: 'none' }} name="xmIwtLD" value="86878b2ec9ad180f13d0b084a977006fd3c690854b88294247a42aa845395417cfdb7e4f3cc38be229ac32087d9ccdb0" />
        <input type="text" style={{ display: 'none' }} name="actionType" value="TGVhZHM=" />
        <input type="text" style={{ display: 'none' }} name="returnURL" value="null" />
        <input type="text" style={{ display: 'none' }} name="aG9uZXlwb3Q" value="" />

        {/* Last Name */}
        <div className="space-y-2">
          <Label htmlFor="Last_Name" className="text-xl font-semibold">
            Last Name (姓) <span className="text-destructive">*</span>
          </Label>
          <Input
            type="text"
            id="Last_Name"
            name="Last Name"
            aria-required="true"
            aria-label="Last Name"
            maxLength={80}
            className="text-lg h-12"
          />
        </div>

        {/* First Name */}
        <div className="space-y-2">
          <Label htmlFor="First_Name" className="text-xl font-semibold">
            First Name (名) <span className="text-destructive">*</span>
          </Label>
          <Input
            type="text"
            id="First_Name"
            name="First Name"
            aria-required="true"
            aria-label="First Name"
            maxLength={40}
            className="text-lg h-12"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="Email" className="text-xl font-semibold">
            Email address (メールアドレス) <span className="text-destructive">*</span>
          </Label>
          <Input
            type="text"
            id="Email"
            name="Email"
            aria-required="true"
            aria-label="Email"
            maxLength={100}
            // @ts-ignore - custom attribute for Zoho validation
            ftype="email"
            autoComplete="off"
            className="text-lg h-12"
          />
        </div>

        {/* City */}
        <div className="space-y-2">
          <Label htmlFor="City" className="text-xl font-semibold">
            City (町・都市) <span className="text-destructive">*</span>
          </Label>
          <Input
            type="text"
            id="City"
            name="City"
            aria-required="true"
            aria-label="City"
            maxLength={100}
            className="text-lg h-12"
          />
        </div>

        {/* Captcha */}
        <div className="space-y-2">
          <Label htmlFor="captchaField37755000000330005" className="text-xl font-semibold">
            Enter the Captcha
          </Label>
          <Input
            type="text"
            id="captchaField37755000000330005"
            name="enterdigest"
            maxLength={10}
            className="text-lg h-12"
          />
          <div className="flex items-center gap-4 mt-3">
            <img
              id="imgid37755000000330005"
              src="https://crm.zoho.jp/crm/CaptchaServlet?formId=86878b2ec9ad180f13d0b084a977006fd3c690854b88294247a42aa845395417cfdb7e4f3cc38be229ac32087d9ccdb0&grpid=64f617e8e312db8c8eec0ff3ca237b9207adc481c04f572c1b709bb42431392d"
              alt="Captcha"
              className="border rounded"
            />
            <button
              type="button"
              onClick={() => (window as any).reloadImg37755000000330005()}
              className="text-primary underline hover:no-underline"
            >
              Reload
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 pt-4">
          <Button
            type="submit"
            id="formsubmit"
            className="formsubmit text-lg h-12 px-8"
          >
            Submit
          </Button>
          <Button
            type="reset"
            variant="outline"
            className="text-lg h-12 px-8"
          >
            Reset
          </Button>
        </div>
      </form>

      {/* Hidden iframe for captcha */}
      <iframe name="captchaFrame" style={{ display: 'none' }} title="Captcha Frame" />
    </div>
  );
};
