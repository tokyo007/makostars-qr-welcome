import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

interface BookFairNewsletterProps {
  language: "en" | "ja";
}

export function BookFairNewsletter({ language }: BookFairNewsletterProps) {
  const content = {
    en: {
      title: "Stay Updated with Book Fair News!",
      subtitle: "Get exclusive updates, special offers, and early access to new arrivals",
      benefits: [
        "🎯 Early access to new book arrivals",
        "💰 Exclusive discount codes",
        "📚 Reading tips & recommendations",
        "🎉 Special event notifications"
      ],
      leadMagnet: "🎁 FREE: English Reading Level Guide",
      leadMagnetSub: "Get your free guide when you sign up!",
      privacy: "We respect your privacy. Unsubscribe anytime."
    },
    ja: {
      title: "ブックフェアの最新情報をお届け！",
      subtitle: "限定オファーや新着情報をいち早くお届けします",
      benefits: [
        "🎯 新着図書の先行案内",
        "💰 限定割引コード",
        "📚 読書のヒントとおすすめ",
        "🎉 特別イベントの通知"
      ],
      leadMagnet: "🎁 無料：英語リーディングレベルガイド",
      leadMagnetSub: "登録時に無料ガイドをプレゼント！",
      privacy: "プライバシーを尊重します。いつでも配信解除可能です。"
    }
  };

  const t = content[language];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden border-2 shadow-2xl">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Column - Benefits */}
              <div className="bg-gradient-to-br from-primary to-primary/90 text-white p-8 sm:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    {t.title}
                  </h2>
                  <p className="text-white/90 text-lg mb-6">
                    {t.subtitle}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {t.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-lg">
                      <span className="mt-1">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-accent/20 backdrop-blur-sm rounded-lg p-4 border border-white/30">
                  <div className="flex items-start gap-3">
                    <Download className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-lg text-accent mb-1">
                        {t.leadMagnet}
                      </p>
                      <p className="text-white/90 text-sm">
                        {t.leadMagnetSub}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="bg-white p-8 sm:p-12">
                <div 
                  dangerouslySetInnerHTML={{
                    __html: `
                      <style>
                        .newsletter-form {
                          width: 100%;
                        }
                        .newsletter-form .zcwf_lblRight {
                          background-color: transparent !important;
                          color: inherit !important;
                          max-width: 100% !important;
                          padding: 0 !important;
                        }
                        .newsletter-form .zcwf_row {
                          margin: 20px 0px;
                        }
                        .newsletter-form .zcwf_col_lab {
                          width: 100% !important;
                          text-align: left !important;
                          font-size: 14px !important;
                          font-weight: 600 !important;
                          margin-bottom: 8px !important;
                          color: #1e293b !important;
                        }
                        .newsletter-form .zcwf_col_fld {
                          width: 100% !important;
                        }
                        .newsletter-form .zcwf_col_fld input[type="text"],
                        .newsletter-form .zcwf_col_fld textarea {
                          width: 100% !important;
                          padding: 10px 12px !important;
                          border: 1px solid #d1d5db !important;
                          border-radius: 6px !important;
                          font-size: 14px !important;
                        }
                        .newsletter-form .zcwf_col_fld input[type="text"]:focus {
                          outline: 2px solid hsl(var(--primary)) !important;
                          outline-offset: 2px !important;
                        }
                        .newsletter-form .formsubmit.zcwf_button {
                          background: hsl(var(--primary)) !important;
                          color: white !important;
                          border: none !important;
                          padding: 12px 32px !important;
                          border-radius: 6px !important;
                          font-size: 16px !important;
                          font-weight: 600 !important;
                          cursor: pointer !important;
                          transition: all 0.2s !important;
                          width: 100% !important;
                          margin-top: 8px !important;
                        }
                        .newsletter-form .formsubmit.zcwf_button:hover {
                          background: hsl(var(--primary) / 0.9) !important;
                          transform: translateY(-1px);
                        }
                        .newsletter-form .zcwf_button[type="reset"] {
                          display: none !important;
                        }
                        .newsletter-form #reCaptchaField {
                          font-size: 14px !important;
                          font-weight: 600 !important;
                          color: #1e293b !important;
                          width: 100% !important;
                          text-align: left !important;
                          margin-bottom: 8px !important;
                        }
                        .newsletter-form #captchaField37755000000334001 {
                          width: 100% !important;
                          padding: 10px 12px !important;
                          border: 1px solid #d1d5db !important;
                          border-radius: 6px !important;
                          font-size: 14px !important;
                        }
                        .newsletter-form #imgid37755000000334001 {
                          margin-top: 12px !important;
                          margin-bottom: 8px !important;
                          border-radius: 4px !important;
                        }
                        @media (max-width: 600px) {
                          .newsletter-form .zcwf_col_lab,
                          .newsletter-form .zcwf_col_fld {
                            width: 100% !important;
                          }
                        }
                      </style>
                      <div class="newsletter-form">
                        <div id='crmWebToEntityForm' class='zcwf_lblRight crmWebToEntityForm'>
                          <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                          <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>
                          <form id='webform37755000000334001' action='https://crm.zoho.jp/crm/WebToLeadForm' name=WebToLeads37755000000334001 method='POST' onSubmit='javascript:document.charset="UTF-8"; return checkMandatory37755000000334001()' accept-charset='UTF-8'>
                            <input type='text' style='display:none;' name='xnQsjsdp' value='80fa9c9b5348cb329a7f1c940a97b4cca38ad2cc9faf26231ec715d779c421be'></input>
                            <input type='hidden' name='zc_gad' id='zc_gad' value=''></input>
                            <input type='text' style='display:none;' name='xmIwtLD' value='86c8d2b3375a12d0fee0a2b1cb85cfbad0ef234fda798834b2917e014b75f208b0211e4e2c0bf4c4225333e029cbbf06'></input>
                            <input type='text' style='display:none;' name='actionType' value='TGVhZHM='></input>
                            <input type='text' style='display:none;' name='returnURL' value='https://apps.makostars.com/book-fair-2025'></input>
                            
                            <div class='zcwf_row'>
                              <div class='zcwf_col_lab'><label for='Last_Name'>Last Name (姓)<span style='color:red;'>*</span></label></div>
                              <div class='zcwf_col_fld'><input type='text' id='Last_Name' name='Last Name' maxlength='80'></input></div>
                            </div>
                            
                            <div class='zcwf_row'>
                              <div class='zcwf_col_lab'><label for='First_Name'>First Name (名)<span style='color:red;'>*</span></label></div>
                              <div class='zcwf_col_fld'><input type='text' id='First_Name' name='First Name' maxlength='40'></input></div>
                            </div>
                            
                            <div class='zcwf_row'>
                              <div class='zcwf_col_lab'><label for='Email'>Email address (メールアドレス)<span style='color:red;'>*</span></label></div>
                              <div class='zcwf_col_fld'><input type='text' ftype='email' id='Email' name='Email' maxlength='100'></input></div>
                            </div>
                            
                            <div class='zcwf_row'>
                              <div class='zcwf_col_lab'><label for='City'>City (町・都市)<span style='color:red;'>*</span></label></div>
                              <div class='zcwf_col_fld'><input type='text' id='City' name='City' maxlength='100'></input></div>
                            </div>
                            
                            <div class='zcwf_row'>
                              <div class='zcwf_col_lab' id='reCaptchaField'>Enter the Captcha</div>
                              <div class='zcwf_col_fld'>
                                <input type='text' id='captchaField37755000000334001' maxlength='10' name='enterdigest'/>
                              </div>
                            </div>
                            
                            <div class='zcwf_row'>
                              <div class='zcwf_col_lab'></div>
                              <div class='zcwf_col_fld'>
                                <img id='imgid37755000000334001' src='https://crm.zoho.jp/crm/CaptchaServlet?formId=86c8d2b3375a12d0fee0a2b1cb85cfbad0ef234fda798834b2917e014b75f208b0211e4e2c0bf4c4225333e029cbbf06&grpid=80fa9c9b5348cb329a7f1c940a97b4cca38ad2cc9faf26231ec715d779c421be'>
                                <a href='javascript:;' onclick='reloadImg37755000000334001();' style='margin-left: 12px; text-decoration: underline; color: hsl(var(--primary));'>Reload</a>
                              </div>
                            </div>
                            
                            <div class='zcwf_row wfrm_fld_dpNn' style='display:none;'>
                              <select id='Lead_Source' name='Lead Source'>
                                <option selected value='Book Fair Page'>Book Fair Page</option>
                              </select>
                            </div>
                            
                            <input type='text' type='hidden' style='display: none;' name='aG9uZXlwb3Q' value=''/>
                            
                            <div class='zcwf_row'>
                              <div class='zcwf_col_lab'></div>
                              <div class='zcwf_col_fld'>
                                <input type='submit' id='formsubmit' class='formsubmit zcwf_button' value='Submit' title='Submit'>
                                <input type='reset' class='zcwf_button' name='reset' value='Reset' style='display:none;'>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      
                      <script>
                        function reloadImg37755000000334001(){
                          var captcha = document.getElementById('imgid37755000000334001');
                          if(captcha.src.indexOf('&d') !== -1){
                            captcha.src = captcha.src.substring(0, captcha.src.indexOf('&d')) + '&d' + new Date().getTime();
                          } else {
                            captcha.src = captcha.src + '&d' + new Date().getTime();
                          }
                        }
                        
                        function validateEmail37755000000334001(){
                          var form = document.forms['WebToLeads37755000000334001'];
                          var emailFld = form.querySelectorAll('[ftype=email]');
                          for(var i = 0; i < emailFld.length; i++){
                            var emailVal = emailFld[i].value;
                            if((emailVal.replace(/^\\s+|\\s+$/g,'')).length != 0){
                              var atpos = emailVal.indexOf('@');
                              var dotpos = emailVal.lastIndexOf('.');
                              if(atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length){
                                alert('Please enter a valid email address.');
                                emailFld[i].focus();
                                return false;
                              }
                            }
                          }
                          return true;
                        }
                        
                        function checkMandatory37755000000334001(){
                          var mndFileds = new Array('First Name','Last Name','Email','City');
                          var fldLangVal = new Array('First Name (名)','Last Name (姓)','Email address (メールアドレス)','City (町・都市)');
                          for(var i = 0; i < mndFileds.length; i++){
                            var fieldObj = document.forms['WebToLeads37755000000334001'][mndFileds[i]];
                            if(fieldObj){
                              if(((fieldObj.value).replace(/^\\s+|\\s+$/g,'')).length == 0){
                                alert(fldLangVal[i] + ' cannot be empty.');
                                fieldObj.focus();
                                return false;
                              } else if(fieldObj.nodeName == 'SELECT'){
                                if(fieldObj.options[fieldObj.selectedIndex].value == '-None-'){
                                  alert(fldLangVal[i] + ' cannot be none.');
                                  fieldObj.focus();
                                  return false;
                                }
                              } else if(fieldObj.type == 'checkbox'){
                                if(fieldObj.checked == false){
                                  alert('Please accept ' + fldLangVal[i]);
                                  fieldObj.focus();
                                  return false;
                                }
                              }
                            }
                          }
                          if(!validateEmail37755000000334001()){
                            return false;
                          }
                          document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
                        }
                      </script>
                    `
                  }}
                />
                
                <p className="text-xs text-muted-foreground mt-6 text-center">
                  {t.privacy}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
