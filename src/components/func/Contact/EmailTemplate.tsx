import { ContactForm } from "@/types/TypeContact";

import { format } from "date-fns";
import { enUS } from "date-fns/locale";

const dateFnsParser = (time: string) => {
  return format(new Date(time), "MMMM d, yyyy", { locale: enUS });
};

export const thanksEmail = (user: ContactForm, time: string) => {
  return `<!DOCTYPE html>
    <html
      dir="ltr"
      xmlns="http://www.w3.org/1999/xhtml"
      xmlns:o="urn:schemas-microsoft-com:office:office"
      lang="en"
    >
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta charset="UTF-8" />
        <meta name="x-apple-disable-message-reformatting" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta content="telephone=no" name="format-detection" />
        <title>Thanks For Contacting</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <style type="text/css">
          .rollover:hover .rollover-first {
            max-height: 0px !important;
            display: none !important;
          }
          .rollover:hover .rollover-second {
            max-height: none !important;
            display: block !important;
          }
          .rollover span {
            font-size: 0;
          }
          u + .body img ~ div div {
            display: none;
          }
          #outlook a {
            padding: 0;
          }
          span.MsoHyperlink,
          span.MsoHyperlinkFollowed {
            color: inherit;
            mso-style-priority: 99;
          }
          a.es-button {
            mso-style-priority: 100 !important;
            text-decoration: none !important;
          }
          a[x-apple-data-detectors] {
            color: inherit !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: inherit !important;
          }
          .es-desk-hidden {
            display: none;
            float: left;
            overflow: hidden;
            width: 0;
            max-height: 0;
            line-height: 0;
            mso-hide: all;
          }
          .es-button-border:hover > a.es-button {
            color: #ffffff !important;
          }
          @media only screen and (max-width: 600px) {
            .es-m-p0r {
              padding-right: 0px !important;
            }
            .es-m-p0l {
              padding-left: 0px !important;
            }
            .es-m-p10b {
              padding-bottom: 10px !important;
            }
            *[class="gmail-fix"] {
              display: none !important;
            }
            p,
            a {
              line-height: 150% !important;
            }
            h1,
            h1 a {
              line-height: 120% !important;
            }
            h2,
            h2 a {
              line-height: 120% !important;
            }
            h3,
            h3 a {
              line-height: 120% !important;
            }
            h4,
            h4 a {
              line-height: 120% !important;
            }
            h5,
            h5 a {
              line-height: 120% !important;
            }
            h6,
            h6 a {
              line-height: 120% !important;
            }
            h1 {
              font-size: 30px !important;
              text-align: center;
            }
            h2 {
              font-size: 24px !important;
              text-align: center;
            }
            h3 {
              font-size: 20px !important;
              text-align: left;
            }
            h4 {
              font-size: 24px !important;
              text-align: left;
            }
            h5 {
              font-size: 20px !important;
              text-align: left;
            }
            h6 {
              font-size: 16px !important;
              text-align: left;
            }
            .es-header-body h1 a,
            .es-content-body h1 a,
            .es-footer-body h1 a {
              font-size: 30px !important;
            }
            .es-header-body h2 a,
            .es-content-body h2 a,
            .es-footer-body h2 a {
              font-size: 24px !important;
            }
            .es-header-body h3 a,
            .es-content-body h3 a,
            .es-footer-body h3 a {
              font-size: 20px !important;
            }
            .es-header-body h4 a,
            .es-content-body h4 a,
            .es-footer-body h4 a {
              font-size: 24px !important;
            }
            .es-header-body h5 a,
            .es-content-body h5 a,
            .es-footer-body h5 a {
              font-size: 20px !important;
            }
            .es-header-body h6 a,
            .es-content-body h6 a,
            .es-footer-body h6 a {
              font-size: 16px !important;
            }
            .es-menu td a {
              font-size: 14px !important;
            }
            .es-header-body p,
            .es-header-body a {
              font-size: 14px !important;
            }
            .es-content-body p,
            .es-content-body a {
              font-size: 14px !important;
            }
            .es-footer-body p,
            .es-footer-body a {
              font-size: 14px !important;
            }
            .es-infoblock p,
            .es-infoblock a {
              font-size: 12px !important;
            }
            .es-m-txt-c,
            .es-m-txt-c h1,
            .es-m-txt-c h2,
            .es-m-txt-c h3,
            .es-m-txt-c h4,
            .es-m-txt-c h5,
            .es-m-txt-c h6 {
              text-align: center !important;
            }
            .es-m-txt-r,
            .es-m-txt-r h1,
            .es-m-txt-r h2,
            .es-m-txt-r h3,
            .es-m-txt-r h4,
            .es-m-txt-r h5,
            .es-m-txt-r h6 {
              text-align: right !important;
            }
            .es-m-txt-j,
            .es-m-txt-j h1,
            .es-m-txt-j h2,
            .es-m-txt-j h3,
            .es-m-txt-j h4,
            .es-m-txt-j h5,
            .es-m-txt-j h6 {
              text-align: justify !important;
            }
            .es-m-txt-l,
            .es-m-txt-l h1,
            .es-m-txt-l h2,
            .es-m-txt-l h3,
            .es-m-txt-l h4,
            .es-m-txt-l h5,
            .es-m-txt-l h6 {
              text-align: left !important;
            }
            .es-m-txt-r img,
            .es-m-txt-c img,
            .es-m-txt-l img {
              display: inline !important;
            }
            .es-m-txt-r .rollover:hover .rollover-second,
            .es-m-txt-c .rollover:hover .rollover-second,
            .es-m-txt-l .rollover:hover .rollover-second {
              display: inline !important;
            }
            .es-m-txt-r .rollover span,
            .es-m-txt-c .rollover span,
            .es-m-txt-l .rollover span {
              line-height: 0 !important;
              font-size: 0 !important;
            }
            .es-spacer {
              display: inline-table;
            }
            a.es-button,
            button.es-button {
              font-size: 18px !important;
              line-height: 120% !important;
            }
            a.es-button,
            button.es-button,
            .es-button-border {
              display: inline-block !important;
            }
            .es-m-fw,
            .es-m-fw.es-fw,
            .es-m-fw .es-button {
              display: block !important;
            }
            .es-m-il,
            .es-m-il .es-button,
            .es-social,
            .es-social td,
            .es-menu {
              display: inline-block !important;
            }
            .es-adaptive table,
            .es-left,
            .es-right {
              width: 100% !important;
            }
            .es-content table,
            .es-header table,
            .es-footer table,
            .es-content,
            .es-footer,
            .es-header {
              width: 100% !important;
              max-width: 600px !important;
            }
            .adapt-img {
              width: 100% !important;
              height: auto !important;
            }
            .es-mobile-hidden,
            .es-hidden {
              display: none !important;
            }
            .es-desk-hidden {
              width: auto !important;
              overflow: visible !important;
              float: none !important;
              max-height: inherit !important;
              line-height: inherit !important;
            }
            tr.es-desk-hidden {
              display: table-row !important;
            }
            table.es-desk-hidden {
              display: table !important;
            }
            td.es-desk-menu-hidden {
              display: table-cell !important;
            }
            .es-menu td {
              width: 1% !important;
            }
            table.es-table-not-adapt,
            .esd-block-html table {
              width: auto !important;
            }
            .es-social td {
              padding-bottom: 10px;
            }
            .h-auto {
              height: auto !important;
            }
          }
          @media screen and (max-width: 384px) {
            .mail-message-content {
              width: 414px !important;
            }
          }
        </style>
      </head>
      <body class="body" style="width: 100%; height: 100%; padding: 0; margin: 0">
        <div
          dir="ltr"
          class="es-wrapper-color"
          lang="en"
          style="background-color: #2e0249"
        >
          <table
            class="es-wrapper"
            width="100%"
            cellspacing="0"
            cellpadding="0"
            role="none"
            style="
              mso-table-lspace: 0pt;
              mso-table-rspace: 0pt;
              border-collapse: collapse;
              border-spacing: 0px;
              padding: 0;
              margin: 0;
              width: 100%;
              height: 100%;
              background-repeat: repeat;
              background-position: center top;
              background-color: #2e0249;
            "
          >
            <tr>
              <td valign="top" style="padding: 0; margin: 0">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  class="es-header"
                  align="center"
                  role="none"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    width: 100%;
                    table-layout: fixed !important;
                    background-color: #570a57;
                    background-repeat: repeat;
                    background-position: center top;
                  "
                >
                  <tr>
                    <td
                      align="center"
                      bgcolor="#2e0249"
                      style="padding: 0; margin: 0; background-color: #2e0249"
                    >
                      <table
                        bgcolor="#2e0249"
                        class="es-header-body"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: #2e0249;
                          width: 600px;
                        "
                        role="none"
                      >
                        <tr>
                          <td
                            class="esdev-adapt-off"
                            align="left"
                            style="padding: 20px; margin: 0"
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              class="esdev-mso-table"
                              role="none"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                                width: 560px;
                              "
                            >
                              <tr>
                                <td
                                  class="esdev-mso-td"
                                  valign="top"
                                  style="padding: 0; margin: 0"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="es-left"
                                    align="left"
                                    role="none"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-collapse: collapse;
                                      border-spacing: 0px;
                                      float: left;
                                    "
                                  >
                                    <tr>
                                      <td
                                        class="es-m-p0r"
                                        valign="top"
                                        align="center"
                                        style="padding: 0; margin: 0; width: 73px"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            border-collapse: collapse;
                                            border-spacing: 0px;
                                          "
                                        >
                                          <tr>
                                            <td
                                              align="left"
                                              class="es-m-txt-l"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                font-size: 0px;
                                              "
                                            >
                                              <a
                                                href="#"
                                                style="
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: underline;
                                                  color: #f6c6ea;
                                                  font-size: 14px;
                                                "
                                                ><img
                                                  src="https://ehxbshy.stripocdn.email/content/guids/CABINET_6238642ba45954e6d6ce5fb7661d4679/images/finger_16converted_BrK.png"
                                                  alt=""
                                                  style="
                                                    display: block;
                                                    font-size: 14px;
                                                    border: 0;
                                                    outline: none;
                                                    text-decoration: none;
                                                  "
                                                  width="60"
                                              /></a>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                                <td style="padding: 0; margin: 0; width: 20px"></td>
                                <td
                                  class="esdev-mso-td"
                                  valign="top"
                                  style="padding: 0; margin: 0"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="es-right"
                                    align="right"
                                    role="none"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-collapse: collapse;
                                      border-spacing: 0px;
                                      float: right;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="left"
                                        style="padding: 0; margin: 0; width: 467px"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          width="100%"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            border-collapse: collapse;
                                            border-spacing: 0px;
                                          "
                                        >
                                          <tr>
                                            <td
                                              align="right"
                                              class="es-m-txt-r"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                                font-size: 0px;
                                              "
                                            >
                                              <a
                                                href="#"
                                                style="
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: underline;
                                                  color: #f6c6ea;
                                                  font-size: 14px;
                                                "
                                                ><img
                                                  src="https://ehxbshy.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/bellremindernotificationalertalarmiconsignsymbolapplicationwebsiteuiwhitebackground.png"
                                                  alt=""
                                                  style="
                                                    display: block;
                                                    font-size: 14px;
                                                    border: 0;
                                                    outline: none;
                                                    text-decoration: none;
                                                  "
                                                  width="45"
                                              /></a>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
                <table
                  cellpadding="0"
                  cellspacing="0"
                  class="es-content"
                  align="center"
                  role="none"
                  style="
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse;
                    border-spacing: 0px;
                    width: 100%;
                    table-layout: fixed !important;
                  "
                >
                  <tr>
                    <td
                      align="center"
                      style="
                        padding: 0;
                        margin: 0;
                        background-size: initial;
                        background-attachment: initial;
                        background-origin: initial;
                        background-clip: initial;
                        background-color: initial;
                      "
                    >
                      <table
                        class="es-content-body"
                        align="center"
                        cellpadding="0"
                        cellspacing="0"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        role="none"
                      >
                        <tr>
                          <td
                            align="left"
                            style="
                              margin: 0;
                              padding-top: 40px;
                              padding-right: 20px;
                              padding-bottom: 40px;
                              padding-left: 20px;
                              border-radius: 20px;
                              background-image: url(https://ehxbshy.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/meshgradient_3.png);
                              background-repeat: no-repeat;
                              background-position: center center;
                            "
                            background="https://ehxbshy.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/meshgradient_3.png"
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="none"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="center"
                                  valign="top"
                                  style="padding: 0; margin: 0; width: 560px"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-collapse: collapse;
                                      border-spacing: 0px;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        class="es-m-txt-l"
                                        style="padding: 0; margin: 0"
                                      >
                                        <h1
                                          style="
                                            margin-bottom:1em !important;
                                            font-family: 'Krona One', sans-serif;
                                            mso-line-height-rule: exactly;
                                            letter-spacing: 0;
                                            font-size: 40px;
                                            font-style: normal;
                                            font-weight: bold;
                                            line-height: 48px;
                                            color: #2e0249 !important;
                                          "
                                        >
                                          Ada Pesan dari Portfolio
                                        </h1>
                                      </td>
                                    </tr>
                                    
                                    <tr>
                                      <td
                                        align="center"
                                        class="es-m-txt-l"
                                        style="padding: 0; margin: 0"
                                      >
                                        <h2
                                          style="
                                            margin: 0;
                                            font-family: 'Krona One', sans-serif;
                                            mso-line-height-rule: exactly;
                                            letter-spacing: 0;
                                            font-size: 24px;
                                            font-style: normal;
                                            font-weight: 600;
                                            line-height: 29px;
                                            color: #2e0249 !important;
                                          "
                                        >
                                          from ${user.yourname}
                                        </h2>
                                      </td>
                                    </tr>

                                    <tr>
                                      <td
                                        align="center"
                                        class="es-m-txt-l"
                                        style="padding: 0; margin: 0"
                                      >
                                        <h2
                                          style="
                                            margin: 0;
                                            font-family: 'Krona One', sans-serif;
                                            mso-line-height-rule: exactly;
                                            letter-spacing: 0;
                                            font-size: 18px;
                                            font-style: normal;
                                            font-weight: 400;
                                            line-height: 20px;
                                            color: #2e0249 !important;
                                          "
                                        >
                                           about ${user.subject}
                                        </h2>
                                      </td>
                                    </tr>
                                    
                                    <tr>
                                      <td
                                        align="left"
                                        class="es-m-p0r es-m-p0l es-m-txt-l"
                                        style="
                                          margin: 0;
                                          padding-right: 15px;
                                          padding-left: 15px;
                                          padding-top: 20px;
                                          padding-bottom: 30px;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            mso-line-height-rule: exactly;
                                            font-family: Poppins, sans-serif;
                                            line-height: 21px;
                                            letter-spacing: 0;
                                            color: #666666 !important;
                                            font-size: 14px;
                                          "
                                        >
                                        ${user.message}
                                        </p>
                                        <p
                                          style="
                                            margin: 0;
                                            mso-line-height-rule: exactly;
                                            font-family: Poppins, sans-serif;
                                            line-height: 21px;
                                            letter-spacing: 0;
                                            color: #666666;
                                            font-size: 14px;
                                          "
                                        >
                                          <br />
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  align="center"
                                  valign="top"
                                  style="padding: 0; margin: 0; width: 560px"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-collapse: separate;
                                      border-spacing: 0px;
                                      border-left: 3px dashed #76a5af;
                                      border-right: 3px dashed #76a5af;
                                      border-top: 3px dashed #76a5af;
                                      border-bottom: 3px dashed #76a5af;
                                      border-radius: 10px;
                                    "
                                    role="presentation"
                                  >
                                    <tr>
                                      <td
                                        align="left"
                                        style="
                                          padding: 0;
                                          margin: 0;
                                          padding-right: 20px !important;
                                          padding-left: 20px !important;
                                          padding-top: 10px !important;
                                          padding-bottom: 10px !important;
                                        "
                                      >
                                        <p
                                          style="
                                            margin: 0;
                                            mso-line-height-rule: exactly;
                                            font-family: 'courier new', courier,
                                              'lucida sans typewriter',
                                              'lucida typewriter', monospace;
                                            line-height: 21px;
                                            letter-spacing: 0;
                                            color: #666666;
                                            font-size: 14px;
                                          "
                                        >
                                        <div style="display : flex; align-items : center; margin-bottom : 10px">
                                          <div style="width : 100px">Name</div>
                                          <div style="">: ${user.yourname}</div>
                                        </div>
                                        <div style="display : flex; align-items : center; margin-bottom : 10px">
                                          <div style="width : 100px">Email</div>
                                          <div style="">: ${user.email}</div>
                                        </div>
                                        <div style="display : flex; align-items : center; margin-bottom : 10px">
                                          <div style="width : 100px">Phone</div>
                                          <div style="">: ${user.phone}</div>
                                        </div>
                                        </p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style="
                              padding: 0;
                              margin: 0;
                              padding-right: 20px;
                              padding-left: 20px;
                              padding-top: 20px;
                            "
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="none"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="center"
                                  valign="top"
                                  style="padding: 0; margin: 0; width: 560px"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-collapse: collapse;
                                      border-spacing: 0px;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        height="0"
                                        style="padding: 0; margin: 0"
                                      ></td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td
                            align="left"
                            style="
                              margin: 0;
                              padding-right: 20px;
                              padding-left: 20px;
                              padding-top: 20px;
                              padding-bottom: 0px;
                            "
                          >
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              width="100%"
                              role="none"
                              style="
                                mso-table-lspace: 0pt;
                                mso-table-rspace: 0pt;
                                border-collapse: collapse;
                                border-spacing: 0px;
                              "
                            >
                              <tr>
                                <td
                                  align="left"
                                  style="padding: 0; margin: 0; width: 560px"
                                >
                                  <table
                                    cellpadding="0"
                                    cellspacing="0"
                                    width="100%"
                                    role="presentation"
                                    style="
                                      mso-table-lspace: 0pt;
                                      mso-table-rspace: 0pt;
                                      border-collapse: collapse;
                                      border-spacing: 0px;
                                    "
                                  >
                                    <tr>
                                      <td
                                        align="center"
                                        class="es-m-p10b"
                                        style="padding: 0; margin: 0; font-size: 0"
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          class="es-table-not-adapt es-social"
                                          dir="ltr"
                                          role="presentation"
                                          style="
                                            mso-table-lspace: 0pt;
                                            mso-table-rspace: 0pt;
                                            border-collapse: collapse;
                                            border-spacing: 0px;
                                          "
                                        >
                                          <tr>
                                            <td
                                              align="center"
                                              valign="top"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-right: 30px;
                                              "
                                            >
                                              <a
                                                target="_blank"
                                                href="https://instagram.com/dendik_542"
                                              >
                                                <img
                                                  src="https://ehxbshy.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png"
                                                  alt="Ig"
                                                  title="Instagram"
                                                  width="32"
                                                  height="32"
                                                  style="
                                                    display: block;
                                                    font-size: 14px;
                                                    border: 0;
                                                    outline: none;
                                                    text-decoration: none;
                                                  "
                                                />
                                              </a>
                                            </td>
                                            <td
                                              align="center"
                                              valign="top"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-right: 30px;
                                              "
                                            >
                                              <a
                                                href="https://github.com/dendik-creation"
                                                target="_blank"
                                              >
                                                <img
                                                  src="https://stripo.email/static/assets/img/other-icons/logo-white/github-logo-white.png"
                                                  alt="GitHub"
                                                  title="GitHub"
                                                  width="32"
                                                  height="32"
                                                  style="
                                                    display: block;
                                                    font-size: 14px;
                                                    border: 0;
                                                    outline: none;
                                                    text-decoration: none;
                                                  "
                                                />
                                              </a>
                                            </td>
                                            <td
                                              align="center"
                                              valign="top"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-right: 30px;
                                              "
                                            >
                                              <a
                                                href="https://linkedin.com/in/dendi-setiawan-165057263"
                                                target="_blank"
                                              >
                                                <img
                                                  src="https://ehxbshy.stripocdn.email/content/assets/img/social-icons/logo-white/linkedin-logo-white.png"
                                                  alt="In"
                                                  title="LinkedIn"
                                                  width="32"
                                                  height="32"
                                                  style="
                                                    display: block;
                                                    font-size: 14px;
                                                    border: 0;
                                                    outline: none;
                                                    text-decoration: none;
                                                  "
                                                />
                                              </a>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </body>
    </html>
    `;
};

export const selfEmail = (user: ContactForm, time: string) => {
  return `<!DOCTYPE html>
  <html
    dir="ltr"
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    lang="en"
  >
    <head>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta charset="UTF-8" />
      <meta name="x-apple-disable-message-reformatting" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta content="telephone=no" name="format-detection" />
      <title>Thanks For Contacting</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      />
      <style type="text/css">
        .rollover:hover .rollover-first {
          max-height: 0px !important;
          display: none !important;
        }
        .rollover:hover .rollover-second {
          max-height: none !important;
          display: block !important;
        }
        .rollover span {
          font-size: 0;
        }
        u + .body img ~ div div {
          display: none;
        }
        #outlook a {
          padding: 0;
        }
        span.MsoHyperlink,
        span.MsoHyperlinkFollowed {
          color: inherit;
          mso-style-priority: 99;
        }
        a.es-button {
          mso-style-priority: 100 !important;
          text-decoration: none !important;
        }
        a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
        }
        .es-desk-hidden {
          display: none;
          float: left;
          overflow: hidden;
          width: 0;
          max-height: 0;
          line-height: 0;
          mso-hide: all;
        }
        .es-button-border:hover > a.es-button {
          color: #ffffff !important;
        }
        @media only screen and (max-width: 600px) {
          .es-m-p0r {
            padding-right: 0px !important;
          }
          .es-m-p0l {
            padding-left: 0px !important;
          }
          .es-m-p10b {
            padding-bottom: 10px !important;
          }
          *[class="gmail-fix"] {
            display: none !important;
          }
          p,
          a {
            line-height: 150% !important;
          }
          h1,
          h1 a {
            line-height: 120% !important;
          }
          h2,
          h2 a {
            line-height: 120% !important;
          }
          h3,
          h3 a {
            line-height: 120% !important;
          }
          h4,
          h4 a {
            line-height: 120% !important;
          }
          h5,
          h5 a {
            line-height: 120% !important;
          }
          h6,
          h6 a {
            line-height: 120% !important;
          }
          h1 {
            font-size: 30px !important;
            text-align: center;
          }
          h2 {
            font-size: 24px !important;
            text-align: center;
          }
          h3 {
            font-size: 20px !important;
            text-align: left;
          }
          h4 {
            font-size: 24px !important;
            text-align: left;
          }
          h5 {
            font-size: 20px !important;
            text-align: left;
          }
          h6 {
            font-size: 16px !important;
            text-align: left;
          }
          .es-header-body h1 a,
          .es-content-body h1 a,
          .es-footer-body h1 a {
            font-size: 30px !important;
          }
          .es-header-body h2 a,
          .es-content-body h2 a,
          .es-footer-body h2 a {
            font-size: 24px !important;
          }
          .es-header-body h3 a,
          .es-content-body h3 a,
          .es-footer-body h3 a {
            font-size: 20px !important;
          }
          .es-header-body h4 a,
          .es-content-body h4 a,
          .es-footer-body h4 a {
            font-size: 24px !important;
          }
          .es-header-body h5 a,
          .es-content-body h5 a,
          .es-footer-body h5 a {
            font-size: 20px !important;
          }
          .es-header-body h6 a,
          .es-content-body h6 a,
          .es-footer-body h6 a {
            font-size: 16px !important;
          }
          .es-menu td a {
            font-size: 14px !important;
          }
          .es-header-body p,
          .es-header-body a {
            font-size: 14px !important;
          }
          .es-content-body p,
          .es-content-body a {
            font-size: 14px !important;
          }
          .es-footer-body p,
          .es-footer-body a {
            font-size: 14px !important;
          }
          .es-infoblock p,
          .es-infoblock a {
            font-size: 12px !important;
          }
          .es-m-txt-c,
          .es-m-txt-c h1,
          .es-m-txt-c h2,
          .es-m-txt-c h3,
          .es-m-txt-c h4,
          .es-m-txt-c h5,
          .es-m-txt-c h6 {
            text-align: center !important;
          }
          .es-m-txt-r,
          .es-m-txt-r h1,
          .es-m-txt-r h2,
          .es-m-txt-r h3,
          .es-m-txt-r h4,
          .es-m-txt-r h5,
          .es-m-txt-r h6 {
            text-align: right !important;
          }
          .es-m-txt-j,
          .es-m-txt-j h1,
          .es-m-txt-j h2,
          .es-m-txt-j h3,
          .es-m-txt-j h4,
          .es-m-txt-j h5,
          .es-m-txt-j h6 {
            text-align: justify !important;
          }
          .es-m-txt-l,
          .es-m-txt-l h1,
          .es-m-txt-l h2,
          .es-m-txt-l h3,
          .es-m-txt-l h4,
          .es-m-txt-l h5,
          .es-m-txt-l h6 {
            text-align: left !important;
          }
          .es-m-txt-r img,
          .es-m-txt-c img,
          .es-m-txt-l img {
            display: inline !important;
          }
          .es-m-txt-r .rollover:hover .rollover-second,
          .es-m-txt-c .rollover:hover .rollover-second,
          .es-m-txt-l .rollover:hover .rollover-second {
            display: inline !important;
          }
          .es-m-txt-r .rollover span,
          .es-m-txt-c .rollover span,
          .es-m-txt-l .rollover span {
            line-height: 0 !important;
            font-size: 0 !important;
          }
          .es-spacer {
            display: inline-table;
          }
          a.es-button,
          button.es-button {
            font-size: 18px !important;
            line-height: 120% !important;
          }
          a.es-button,
          button.es-button,
          .es-button-border {
            display: inline-block !important;
          }
          .es-m-fw,
          .es-m-fw.es-fw,
          .es-m-fw .es-button {
            display: block !important;
          }
          .es-m-il,
          .es-m-il .es-button,
          .es-social,
          .es-social td,
          .es-menu {
            display: inline-block !important;
          }
          .es-adaptive table,
          .es-left,
          .es-right {
            width: 100% !important;
          }
          .es-content table,
          .es-header table,
          .es-footer table,
          .es-content,
          .es-footer,
          .es-header {
            width: 100% !important;
            max-width: 600px !important;
          }
          .adapt-img {
            width: 100% !important;
            height: auto !important;
          }
          .es-mobile-hidden,
          .es-hidden {
            display: none !important;
          }
          .es-desk-hidden {
            width: auto !important;
            overflow: visible !important;
            float: none !important;
            max-height: inherit !important;
            line-height: inherit !important;
          }
          tr.es-desk-hidden {
            display: table-row !important;
          }
          table.es-desk-hidden {
            display: table !important;
          }
          td.es-desk-menu-hidden {
            display: table-cell !important;
          }
          .es-menu td {
            width: 1% !important;
          }
          table.es-table-not-adapt,
          .esd-block-html table {
            width: auto !important;
          }
          .es-social td {
            padding-bottom: 10px;
          }
          .h-auto {
            height: auto !important;
          }
        }
        @media screen and (max-width: 384px) {
          .mail-message-content {
            width: 414px !important;
          }
        }
      </style>
    </head>
    <body class="body" style="width: 100%; height: 100%; padding: 0; margin: 0">
      <div
        dir="ltr"
        class="es-wrapper-color"
        lang="en"
        style="background-color: #2e0249"
      >
        <table
          class="es-wrapper"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          role="none"
          style="
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            border-collapse: collapse;
            border-spacing: 0px;
            padding: 0;
            margin: 0;
            width: 100%;
            height: 100%;
            background-repeat: repeat;
            background-position: center top;
            background-color: #2e0249;
          "
        >
          <tr>
            <td valign="top" style="padding: 0; margin: 0">
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-header"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                  background-color: #570a57;
                  background-repeat: repeat;
                  background-position: center top;
                "
              >
                <tr>
                  <td
                    align="center"
                    bgcolor="#2e0249"
                    style="padding: 0; margin: 0; background-color: #2e0249"
                  >
                    <table
                      bgcolor="#2e0249"
                      class="es-header-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: #2e0249;
                        width: 600px;
                      "
                      role="none"
                    >
                      <tr>
                        <td
                          class="esdev-adapt-off"
                          align="left"
                          style="padding: 20px; margin: 0"
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            class="esdev-mso-table"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                              width: 560px;
                            "
                          >
                            <tr>
                              <td
                                class="esdev-mso-td"
                                valign="top"
                                style="padding: 0; margin: 0"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="es-left"
                                  align="left"
                                  role="none"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                    float: left;
                                  "
                                >
                                  <tr>
                                    <td
                                      class="es-m-p0r"
                                      valign="top"
                                      align="center"
                                      style="padding: 0; margin: 0; width: 73px"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tr>
                                          <td
                                            align="left"
                                            class="es-m-txt-l"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              font-size: 0px;
                                            "
                                          >
                                            <a
                                              href="#"
                                              style="
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #f6c6ea;
                                                font-size: 14px;
                                              "
                                              ><img
                                                src="https://ehxbshy.stripocdn.email/content/guids/CABINET_6238642ba45954e6d6ce5fb7661d4679/images/finger_16converted_BrK.png"
                                                alt=""
                                                style="
                                                  display: block;
                                                  font-size: 14px;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                "
                                                width="60"
                                            /></a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                              <td style="padding: 0; margin: 0; width: 20px"></td>
                              <td
                                class="esdev-mso-td"
                                valign="top"
                                style="padding: 0; margin: 0"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="es-right"
                                  align="right"
                                  role="none"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                    float: right;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      style="padding: 0; margin: 0; width: 467px"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        width="100%"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tr>
                                          <td
                                            align="right"
                                            class="es-m-txt-r"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-top: 5px;
                                              padding-bottom: 5px;
                                              font-size: 0px;
                                            "
                                          >
                                            <a
                                              href="#"
                                              style="
                                                mso-line-height-rule: exactly;
                                                text-decoration: underline;
                                                color: #f6c6ea;
                                                font-size: 14px;
                                              "
                                              ><img
                                                src="https://ehxbshy.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/bellremindernotificationalertalarmiconsignsymbolapplicationwebsiteuiwhitebackground.png"
                                                alt=""
                                                style="
                                                  display: block;
                                                  font-size: 14px;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                "
                                                width="45"
                                            /></a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table
                cellpadding="0"
                cellspacing="0"
                class="es-content"
                align="center"
                role="none"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  width: 100%;
                  table-layout: fixed !important;
                "
              >
                <tr>
                  <td
                    align="center"
                    style="
                      padding: 0;
                      margin: 0;
                      background-size: initial;
                      background-attachment: initial;
                      background-origin: initial;
                      background-clip: initial;
                      background-color: initial;
                    "
                  >
                    <table
                      class="es-content-body"
                      align="center"
                      cellpadding="0"
                      cellspacing="0"
                      style="
                        mso-table-lspace: 0pt;
                        mso-table-rspace: 0pt;
                        border-collapse: collapse;
                        border-spacing: 0px;
                        background-color: transparent;
                        width: 600px;
                      "
                      role="none"
                    >
                      <tr>
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-top: 40px;
                            padding-right: 20px;
                            padding-bottom: 40px;
                            padding-left: 20px;
                            border-radius: 20px;
                            background-image: url(https://ehxbshy.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/meshgradient_3.png);
                            background-repeat: no-repeat;
                            background-position: center center;
                          "
                          background="https://ehxbshy.stripocdn.email/content/guids/CABINET_9b143e749e3aaed3697507da71b3bd7b7e0aa7b60b3fdc77ad722f0ebae80f8e/images/meshgradient_3.png"
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-txt-l"
                                      style="padding: 0; margin: 0"
                                    >
                                      <h1
                                        style="
                                          margin: 0;
                                          font-family: 'Krona One', sans-serif;
                                          mso-line-height-rule: exactly;
                                          letter-spacing: 0;
                                          font-size: 40px;
                                          font-style: normal;
                                          font-weight: bold;
                                          line-height: 48px;
                                          color: #2e0249 !important;
                                        "
                                      >
                                        Thanks For Contacting
                                      </h1>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-txt-l"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-top: 30px;
                                        padding-bottom: 20px;
                                        font-size: 0px;
                                      "
                                    >
                                      <a
                                        target="_blank"
                                        href="https://viewstripo.email"
                                        style="
                                          mso-line-height-rule: exactly;
                                          text-decoration: underline;
                                          color: #666666;
                                          font-size: 14px;
                                        "
                                        ><img
                                          src="https://ehxbshy.stripocdn.email/content/guids/652c2e96-2f33-4980-9d64-72f5f38f5c25/images/mendoan.png"
                                          alt="Dendi' Avatar"
                                          style="
                                            display: block;
                                            font-size: 14px;
                                            border: 0;
                                            outline: none;
                                            text-decoration: none;
                                            border-radius: 20px;
                                          "
                                          width="100"
                                          title="Christina Scott"
                                      /></a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-txt-l"
                                      style="padding: 0; margin: 0"
                                    >
                                      <h2
                                        style="
                                          margin: 0;
                                          font-family: 'Krona One', sans-serif;
                                          mso-line-height-rule: exactly;
                                          letter-spacing: 0;
                                          font-size: 24px;
                                          font-style: normal;
                                          font-weight: bold;
                                          line-height: 29px;
                                          color: #2e0249 !important;
                                        "
                                      >
                                        from Dendi' Setiawan
                                      </h2>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-txt-l es-m-p0r es-m-p0l"
                                      style="
                                        margin: 0;
                                        padding-bottom: 20px;
                                        padding-top: 10px;
                                        padding-right: 15px;
                                        padding-left: 15px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: Poppins, sans-serif;
                                          line-height: 21px;
                                          letter-spacing: 0;
                                          color: #999999;
                                          font-size: 14px;
                                        "
                                      >
                                        ${dateFnsParser(time)}
                                      </p>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td
                                      align="left"
                                      class="es-m-p0r es-m-p0l es-m-txt-l"
                                      style="
                                        margin: 0;
                                        padding-right: 15px;
                                        padding-left: 15px;
                                        padding-top: 20px;
                                        padding-bottom: 30px;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: Poppins, sans-serif;
                                          line-height: 21px;
                                          letter-spacing: 0;
                                          color: #666666 !important;
                                          font-size: 14px;
                                        "
                                      >
                                        Hello <span style="font-weight : 700">${
                                          user.yourname
                                        }</span>, Thank you for providing
                                        feedback, input, or criticism. I will
                                        reply to your message as soon as
                                        possible.&nbsp;
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: Poppins, sans-serif;
                                          line-height: 21px;
                                          letter-spacing: 0;
                                          color: #666666;
                                          font-size: 14px;
                                        "
                                      >
                                        <br />
                                      </p>
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: Poppins, sans-serif;
                                          line-height: 21px;
                                          letter-spacing: 0;
                                          color: #666666 !important;
                                          font-size: 14px;
                                        "
                                      >
                                        <em
                                          ><strong>Stay Connect . . .</strong></em
                                        >
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: separate;
                                    border-spacing: 0px;
                                    border-left: 3px dashed #76a5af;
                                    border-right: 3px dashed #76a5af;
                                    border-top: 3px dashed #76a5af;
                                    border-bottom: 3px dashed #76a5af;
                                    border-radius: 10px;
                                  "
                                  role="presentation"
                                >
                                  <tr>
                                    <td
                                      align="left"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        padding-right: 20px !important;
                                        padding-left: 20px !important;
                                        padding-top: 10px !important;
                                        padding-bottom: 10px !important;
                                      "
                                    >
                                      <p
                                        style="
                                          margin: 0;
                                          mso-line-height-rule: exactly;
                                          font-family: 'courier new', courier,
                                            'lucida sans typewriter',
                                            'lucida typewriter', monospace;
                                          line-height: 21px;
                                          letter-spacing: 0;
                                          color: #666666;
                                          font-size: 14px;
                                        "
                                      >
                                        If you need help with website development,
                                        you can also contact me again.
                                      </p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style="
                            padding: 0;
                            margin: 0;
                            padding-right: 20px;
                            padding-left: 20px;
                            padding-top: 20px;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="center"
                                valign="top"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      height="0"
                                      style="padding: 0; margin: 0"
                                    ></td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td
                          align="left"
                          style="
                            margin: 0;
                            padding-right: 20px;
                            padding-left: 20px;
                            padding-top: 20px;
                            padding-bottom: 0px;
                          "
                        >
                          <table
                            cellpadding="0"
                            cellspacing="0"
                            width="100%"
                            role="none"
                            style="
                              mso-table-lspace: 0pt;
                              mso-table-rspace: 0pt;
                              border-collapse: collapse;
                              border-spacing: 0px;
                            "
                          >
                            <tr>
                              <td
                                align="left"
                                style="padding: 0; margin: 0; width: 560px"
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  width="100%"
                                  role="presentation"
                                  style="
                                    mso-table-lspace: 0pt;
                                    mso-table-rspace: 0pt;
                                    border-collapse: collapse;
                                    border-spacing: 0px;
                                  "
                                >
                                  <tr>
                                    <td
                                      align="center"
                                      class="es-m-p10b"
                                      style="padding: 0; margin: 0; font-size: 0"
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        class="es-table-not-adapt es-social"
                                        dir="ltr"
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                      >
                                        <tr>
                                          <td
                                            align="center"
                                            valign="top"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-right: 30px;
                                            "
                                          >
                                            <a
                                              target="_blank"
                                              href="https://instagram.com/dendik_542"
                                            >
                                              <img
                                                src="https://ehxbshy.stripocdn.email/content/assets/img/social-icons/logo-white/instagram-logo-white.png"
                                                alt="Ig"
                                                title="Instagram"
                                                width="32"
                                                height="32"
                                                style="
                                                  display: block;
                                                  font-size: 14px;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                "
                                              />
                                            </a>
                                          </td>
                                          <td
                                            align="center"
                                            valign="top"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-right: 30px;
                                            "
                                          >
                                            <a
                                              href="https://github.com/dendik-creation"
                                              target="_blank"
                                            >
                                              <img
                                                src="https://stripo.email/static/assets/img/other-icons/logo-white/github-logo-white.png"
                                                alt="GitHub"
                                                title="GitHub"
                                                width="32"
                                                height="32"
                                                style="
                                                  display: block;
                                                  font-size: 14px;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                "
                                              />
                                            </a>
                                          </td>
                                          <td
                                            align="center"
                                            valign="top"
                                            style="
                                              padding: 0;
                                              margin: 0;
                                              padding-right: 30px;
                                            "
                                          >
                                            <a
                                              href="https://linkedin.com/in/dendi-setiawan-165057263"
                                              target="_blank"
                                            >
                                              <img
                                                src="https://ehxbshy.stripocdn.email/content/assets/img/social-icons/logo-white/linkedin-logo-white.png"
                                                alt="In"
                                                title="LinkedIn"
                                                width="32"
                                                height="32"
                                                style="
                                                  display: block;
                                                  font-size: 14px;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                "
                                              />
                                            </a>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </body>
  </html>
  `;
};
