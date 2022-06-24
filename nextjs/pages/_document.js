import { Html, Head, Main, NextScript } from 'next/document';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
const OPTIMIZE_CONTAINER_ID = process.env.NEXT_PUBLIC_OPTIMIZE_ID;
const HOTJAR_HJID = process.env.NEXT_PUBLIC_HOTJAR_HJID;
const HOTJAR_HJSV = process.env.NEXT_PUBLIC_HOTJAR_HJSV;

export default function Document() {
	return (
		<Html>
			<Head>
				{/* Google Optimize */}
				<script
					src={`https://www.googleoptimize.com/optimize.js?id=${OPTIMIZE_CONTAINER_ID}`}
				/>

				{/* Google Analytics 4 */}
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `,
					}}
				/>

				{/* Hotjar */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
						(function(h,o,t,j,a,r){
							h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
							h._hjSettings={hjid:${HOTJAR_HJID},hjsv:${HOTJAR_HJSV}};
							a=o.getElementsByTagName('head')[0];
							r=o.createElement('script');r.async=1;
							r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
							a.appendChild(r);
						})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
