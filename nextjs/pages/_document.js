import { Html, Head, Main, NextScript } from 'next/document';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
const OPTIMIZE_CONTAINER_ID = process.env.NEXT_PUBLIC_OPTIMIZE_ID;

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
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
