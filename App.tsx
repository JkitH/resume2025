
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import ExperienceItem from './components/ExperienceItem';
import ProjectItem from './components/ProjectItem';
import EducationItem from './components/EducationItem';
import type { ContactInfo, EducationEntry, ExperienceEntry, ProjectEntry } from './types';
import { BriefcaseIcon, LightBulbIcon, AcademicCapIcon } from './components/Icons';

const contactData: ContactInfo = {
  name: "許倍祺",
  title: "資深產品經理 | AI驅動媒體 | 用戶增長 | 跨境商業",
  email: "lovewish2260@gmail.com",
  phone: "+886-972857690",
};

const experiencesData: ExperienceEntry[] = [
  {
    role: "資深產品經理",
    company: "美商 VOCO Media",
    dates: "2022年9月至今",
    keywords: ["AI驅動媒體平台", "用戶增長策略", "跨境商業模式", "0→1產品規模化"],
    details: [
      {
        subHeading: "用戶生態系統建構",
        points: [
          "從0到1打造以「華裔美國人社群」為核心的媒體平台,結合「金幣獎勵機制」與「利潤共享計畫」,上線一年突破30萬用戶,活躍留存率達80%,帶動電商轉換率提升25%。",
          "設計「跨平台積分互通」系統,整合媒體內容、本地商家優惠券、電商消費場景,驅動用戶日均停留時長提升40%"
        ]
      },
      {
        subHeading: "戰略融資與商業拓展",
        points: [
          "主導商業提案與產品策略, 2023年Q2成功募資100萬美元(種子輪),並於2024年Q1完成600萬美元戰略融資,現推進Pre-A輪融資(目標估值提升300%)。",
          "建立「媒體+電商+零售媒體廣告(Retail Media Network, RMN)」變現模型,廣告收入逐年遞增,合作商家數半年內達到100家。"
        ]
      },
      {
        subHeading: "AI與區塊鏈技術應用",
        points: [
          "導入LLM語言模型與TTS技術,開發多語言即時文字音頻交替系統,並導入自動化短影片流程,降低跨國廣告與內容製作成本60%,支援英語/中文無縫切換,吸引投資人關注。",
          "主導「A.I.自動化新聞摘要系統」開發(已申請專利),縮短編輯工時20%,評估代幣經濟模型可行性,規劃下一階段 Web3用戶激勵計畫。"
        ]
      },
      {
        subHeading: "跨國協作與流程優化",
        points: [
          "建立開發SOP,以完整的視覺化流程、協調美國台灣工程外包團隊開發,達到節省開支並快速評估效益。"
        ]
      }
    ]
  },
  {
    role: "產品與使用者體驗助理總監",
    company: "Jia-Xin & Jie-Hang Technology Inc. (Remote)",
    dates: "2019年12月 - 2022年7月",
    keywords: ["SaaS", "運動數據", "金融科技", "區塊鏈", "遊戲"],
    details: [
      {
        subHeading: "產品策略與跨境合作",
        points: [
          "負責 Web 與行動端產品開發,針對境外運動賽事相關產品制定策略,為歐美大型品牌端提供解決方案並推動合作。",
          "產品涵蓋用戶數據平台、中台維運介面、後台帳務與控制,確保系統穩定運行並符合商業需求。",
          "2021年主導品牌VPN和公司內部ERP系統開發,並成功將產品應用拓展至 區塊鏈交易所與錢包整合,提升整體產品競爭力。"
        ]
      },
      {
        subHeading: "SaaS 平台開發與營收增長",
        points: [
            "主導推出 B2B 體育賽事 SaaS 服務(2021-2022),成功推動 平台用戶增長與客戶滿意度提升,擴大市場影響力。",
            "設計 平台預測系統、推薦跟單等增值功能,透過數據分析與算法優化提高 平台可靠性與用戶互動率,直接促進營收成長。",
            "進行產品可行性分析,優化 App 與 Web 產品開發規劃,確保資源分配與專案進度符合業務需求。"
        ]
      },
      {
        subHeading: "跨裝置體驗優化與VPN 產品創新",
        points: [
            "提出跨裝置串連(OneSign)、跨國語系適配 概念,降低用戶進入門檻並提升體驗,產品上線後獲得客戶高度評價。",
            "透過精細化使用者旅程分析,優化 VPN 設定與操作流程,提高用戶轉換率。"
        ]
      },
      {
        subHeading: "團隊管理與協作流程優化",
        points: [
            "促進跨部門與跨國解決方案開發,提供PM 與技術團隊詳細的流程指導,顯著提升 跨團隊協作效率與交付品質。",
            "在部門內導入OKR 管理機制,透過 定期績效評估與反饋機制 提升團隊士氣與工作效率,確保關鍵目標達成。",
            "優化內部溝通與協作流程,提升跨部門團隊可見性與協調性,確保專案進度與目標一致。"
        ]
      }
    ]
  },
  {
    role: "產品經理",
    company: "ETtoday 東森新媒體控股",
    dates: "2017年12月 - 2019年6月",
    keywords: ["媒體", "資料", "UI", "深度學習", "電子商務"],
    details: [
        {
            subHeading: "新聞媒體產品開發與優化",
            points: [
                "負責 東森新聞雲、星光雲及 ET 星光雲(大陸地區)產品功能開發與維運,協調 新聞內容、App 廣告系統、行銷活動需求,提升協作效率與產品功能。",
                "透過用戶行為數據與點擊率分析,推動數據驅動的產品改進,優化用戶體驗。"
            ]
        },
        {
            subHeading: "用戶增長與市場推廣",
            points: [
                "多渠道推廣與用戶體驗優化,使App 安裝量增加 35% 至700萬,用戶註冊數提升5%,日活躍用戶(DAU)增長 10% 至17萬。",
                "2018年在全球市場研究台灣媒體 App 三項一級指標中取得第一名,提升品牌競爭力。"
            ]
        },
        {
            subHeading: "產品路線圖規劃與UI 優化",
            points: [
                "制定 App 產品路線圖,整合初始需求並進行 可行性分析與時程規劃,確保開發進度與產品戰略一致。",
                "提出 UI設計與新設計理念,提升界面直觀性與易用性,導致一年內用戶留存率提升15%。"
            ]
        },
        {
            subHeading: "電子商務與流量轉化",
            points: [
                "與母集團東森購物合作,推動App 內流量變現與互動機制優化,用戶留存提升30%,總留存率提高15%。"
            ]
        }
    ]
  },
   {
    role: "產品經理",
    company: "富爾特科技",
    dates: "2016年2月 - 2017年11月",
    secondaryRole: "UI/UX設計工程師 (內部轉職)",
    secondaryDates: "2015年7月 - 2016年2月",
    keywords: ["UI(RWD/App)", "資訊架構", "SEO", "專案經理"],
    details: [
        {
            subHeading: "產品開發與架構設計",
            points: [
                "負責 EZding 電影購票網站與 Tripitta 訂房網站,主導 產品架構與功能改版,確保系統效能與用戶體驗優化。",
                "2016 年組織調整,從 業務部門轉至工程部門,負責技術與業務需求整合,提高跨部門協作效率。"
            ]
        },
        {
            subHeading: "EZding 電影票務平台",
            points: [
                "主導 2016-2017年網站改版,重新設計 訂票流程,提升用戶購票彈性與體驗,上線後 三個月內訂單量增長85%。",
                "定義並實施 電影票對帳系統與銀行支付系統,提升交易準確性與結算效率,確保金融機構與合作影城對帳順暢。"
            ]
        },
        {
            subHeading: "Tripitta 旅遊與訂房平台",
            points: [
                "Tripitta 原為 EZding 旗下民宿品牌,後獨立為訂房網站,負責 網站與 App 產品開發,並同步建立 民宿供應端後台系統,提升供應端管理效能。",
                "與 Expedia、Agoda、攜程、馬蜂窩 等 OTA 平台 合作,推動 聯盟行銷,並提供 TripAdvisor 民宿評價數據,擴展市場曝光。",
                "品牌結束後仍維持供應端後台運作,確保 現有訂單消化完成,降低商家損失並維持良好合作關係。"
            ]
        },
        {
            subHeading: "旅遊平台業務增長與市場影響",
            points: [
                 "主導 Tripitta 旅遊一站式解決方案,優化 用戶體驗與滿意度, 使 網站流量與用戶留存率提升 40%。",
                 "與 Booking Holdings、TripAdvisor、攜程網等國際合作夥伴合作,打造 台灣本土 BnB 平台,提升品牌知名度與市場影響力。"
            ]
        },
        {
            subHeading: "系統效能與用戶體驗優化",
            points: [
                 "主導產品架構與功能設計,提升 系統效能、穩定性與使用者體驗,確保平台可持續擴展與應對高流量需求。"
            ]
        }
    ]
  },
  {
    role: "使用者介面/使用者體驗設計師",
    company: "大塚資訊科技股份有限公司",
    dates: "2014年6月 - 2015年6月",
    keywords: ["Unity", "NGUI", "3D App解決方案", "提案"],
    details: [
        {
            subHeading: "3D 應用與動線設計",
            points: [
                "負責 3D App 動線設計與規劃,主導 前期架構提案、整體視覺設計,並協助 客戶端系統與訂單串接,確保產品流暢運行與高效整合。",
                "使用 Unity 3D 引擎開發 產品,並透過 NGUI 建構 UI 設計框架,提升使用者體驗與互動效果。"
            ]
        },
        {
            subHeading: "VR 解決方案與產業應用",
            points: [
                "為工具機產業開發 VR 解決方案,提升 教育培訓與行銷展示效果,幫助企業提升客戶體驗與轉化率。",
                "打造沉浸式3D互動應用,增強數位模擬與產品展示效果,優化產業應用場景。"
            ]
        },
        {
            subHeading: "商業提案與銷售推動",
            points: [
                "直接與客戶溝通,提出並獲取商業提案,推動企業導入 3D 互動應用,提高產品附加價值。",
                "透過產品展示與市場應用分析,協助業務團隊擴展銷售機會,促進新客戶開發與市場增長。"
            ]
        }
    ]
  },
  {
    role: "業務經理",
    company: "OnShow.象藝創意",
    dates: "2013年6月 - 2014年6月",
    keywords: ["專案管理", "活動", "藝術", "網站案例"],
    details: [
        {
            subHeading: "網站開發與品牌形象強化",
            points: [
                "使用 WordPress、HubSpot 及其他 CMS 平台開發前端網站,提升企業與客戶品牌的數位形象與市場曝光。",
                "針對藝術與文化領域 設計數位行銷策略, 增強 線上互動體驗與流量導入。"
            ]
        },
        {
            subHeading: "客戶需求分析與專案管理",
            points: [
                "分析客戶需求,提供量身訂製的解決方案,提升 客戶滿意度 並強化長期合作關係。",
                "主導跨部門協作,確保項目在預算與時程內順利執行,並符合 高標準服務水準。"
            ]
        },
        {
            subHeading: "活動策劃與供應鏈管理",
            points: [
                "協調供應商與內部團隊,負責 活動策劃與執行,確保專案順利落地,並提升 客戶體驗與活動成效。",
                "監督活動執行與現場管理,確保場地、設備、人員運作順暢,並根據即時狀況進行調整,提升活動成功率。"
            ]
        }
    ]
  }
];

const projectsData: ProjectEntry[] = [
  {
    name: "多國交易所功能規劃",
    roleOrType: "個人專案",
    dates: "2023-2024",
    keywords: ["#交易所", "#Web3", "#多語系地區"],
    description: "交易所功能調研、拆解與開發規劃(部分可揭露資料)。",
    link: "https://docs.google.com/spreadsheets/d/1m3o1dC-h0VByyJntL29vJpwQVTwVXFdpvKMFIRy7QG4/edit?usp=sharing",
    linkText: "查看試算表"
  },
  {
    name: "AppleCensorShip",
    roleOrType: "UX/NPO",
    dates: "2022-2023",
    description: "管理 Apple 審查網站,強調 Apple 做法對資訊存取和隱私的影響。",
    linkText: "組織相關新聞 (無法提供連結)"
  },
  {
    name: "小黑貓有料案内所",
    roleOrType: "站長/部落格技術",
    dates: "2016年 - 至今",
    description: "創建並管理 B-cat 部落格,主要為增強與即時更新 SEO 知識和 WordPress 最新技能。"
  },
  {
    name: "安可日子",
    roleOrType: "共同開發產品經理 / 安可日有限公司",
    dates: "2019-2021",
    description: "管理熟齡的 Encore 社群媒體應用, 在三個月內增加了1萬名會員,並於 2021 年參與 Google 台灣計畫孵化器導師計畫。"
  },
  {
    name: "網紅共和國",
    roleOrType: "產品顧問 / 網紅共和國有限公司",
    dates: "2019-2020",
    description: "管理 KOL Network 預測系統,技術涵蓋爬蟲與演算法,促進機構與關鍵意見領袖的合作。"
  }
];

const educationData: EducationEntry[] = [
  {
    degree: "工商管理學士",
    school: "管理學院, 元智大學",
    years: "2008 - 2012",
  },
];


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Header contact={contactData} />
      <main>
        <Section title="工作經歷" icon={<BriefcaseIcon />}>
          {experiencesData.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} />
          ))}
        </Section>
        
        <Section title="Side Projects" icon={<LightBulbIcon />}>
          {projectsData.map((proj, index) => (
            <ProjectItem key={index} project={proj} />
          ))}
        </Section>

        <Section title="學歷" icon={<AcademicCapIcon />}>
          {educationData.map((edu, index) => (
            <EducationItem key={index} education={edu} />
          ))}
        </Section>
      </main>
      <footer className="text-center p-6 bg-slate-800 text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} 許倍祺. All rights reserved.</p>
        <p>此頁面使用 React 與 Tailwind CSS 建置。</p>
      </footer>
    </div>
  );
};

export default App;
