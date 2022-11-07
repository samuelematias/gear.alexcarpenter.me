import { Box } from "components/Box";
import { Entry } from "components/Entry";
import { Heading } from "components/Heading";
import { Marquee } from "components/Marquee";
import { Mosaic } from "components/Mosaic";
import { Spacer } from "components/Spacer";
import { VisuallyHidden } from "components/VisuallyHidden";
import type { Post } from "contentlayer/generated";
import { allPosts } from "contentlayer/generated";

export async function getStaticProps() {
  const posts = allPosts.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  );
  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      {/* <Box as="section" paddingX="md">
        <Box marginX="auto" maxWidth="lg">
          <Mosaic
            items={[
              {
                src: "/img/jon-gaffney-edc-winter-1.jpeg",
              },
              {
                src: "/img/jon-gaffney-edc-winter-2.jpeg",
              },
              {
                src: "/img/jon-gaffney-edc-winter-3.jpeg",
              },
            ]}
          />
        </Box>
      </Box> */}

      <Box as="section" paddingX="md" marginY="xxl">
        <Box marginX="auto" maxWidth="lg">
          <Box as="header" textAlign="center" marginBottom="lg">
            <Heading>Favorite Brands</Heading>
          </Box>
          <Marquee>
            <svg
              height="50"
              viewBox="0 0 404 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#a)">
                <g clipPath="url(#b)">
                  <path
                    d="M335.325 33.069c0 .4904.186 2.2746.415 3.9647.493 3.6576.471 5.3475-.071 5.4509-.206.0391-2.094-1.0119-4.317-2.4014-7.218-4.5144-8.512-5.0301-9.448-3.7693-.42.5653-.424.6964-.424 12.7457 0 6.6959.069 12.4223.153 12.725.243.8659.779 1.0366 2.149.685 1.516-.3888 3.982-1.5325 7.919-3.6723 1.731-.9408 3.289-1.7106 3.463-1.7106.936 0 1.063 1.9236.394 5.9682-.568 3.4391-.596 3.7402-.35 3.7624 2.106.1898 14.499-2.3982 33.468-6.9897 17.53-4.2425 32.847-8.5562 34.96-9.8451.663-.4052.679-.4404.315-.7073-2.917-2.134-54.944-15.1768-67.665-16.9628l-.961-.135v.8916ZM4.65978 32.7196c-1.89452.4111-3.01692 1.1781-3.694037 2.5241-.9162335 1.8214-.9904134 3.0488-.918659 15.179.058818 9.9303.106116 11.334.412133 12.2454.491771 1.4651 1.140993 2.3363 2.161323 2.8999 1.79467.9918 2.24743 1.0209 15.92446 1.0241l12.7844.0033v-6.2685l-11.6727-.0522-11.67277-.0522-.05195-13.9089-.05194-13.909-.95868.016c-.52735.0089-1.54505.1434-2.26158.299Zm4.84009 2.7114v3.043H32.7442v3.8439h7.9444l-.1179-2.4939c-.1506-3.1919-.5892-4.5633-1.8231-5.7003-1.7741-1.6345-1.3799-1.5938-16.1601-1.6691L9.49987 32.388v3.043Zm49.62173-2.7257c-2.8395.6287-3.8099 1.5218-4.5105 4.1502-.3836 1.44-.591 19.5943-.2645 23.1694.3272 3.5841 1.198 5.1017 3.4508 6.0145 1.1204.4542 1.1412.4548 15.1192.5133l13.9972.0582v-6.2872H62.2545V32.4046l-.9601.016c-.5281.0089-1.5058.137-2.1728.2847Zm4.7499 2.734v3.0347h24.6593v28.1792l1.5664-.1163c3.2813-.2438 4.9988-1.3027 5.8119-3.5831.3734-1.0476.4002-1.7903.4599-12.7004.041-7.507-.0116-11.9955-.1492-12.7457-.3353-1.8276-1.1636-3.2869-2.2369-3.9408-1.8175-1.1077-2.5082-1.155-16.9227-1.1588l-13.1887-.0035v3.0347Zm49.1165 4.6532v7.6878h-6.468v5.8671h6.462l.054 6.5246.053 6.5245h7.681l.053-6.4234.053-6.4234h7.62l3.919 3.6754c2.155 2.0215 5.255 4.9348 6.889 6.474l2.97 2.7986h4.559c2.507 0 4.559-.0775 4.559-.1722 0-.0945-3.009-2.9851-6.687-6.4234l-6.686-6.2512 3.078-.1415c1.693-.0776 3.522-.2367 4.065-.3532 2.009-.4313 3.518-1.5726 4.292-3.2459.399-.8635.422-1.2507.422-7.1843v-6.2717l-.607-1.1054c-.709-1.294-1.917-2.2821-3.394-2.7775-.94-.3152-2.247-.3602-12.22-.4194l-11.167-.0664v5.8861l8.944.0004c11.589.0004 10.856-.3152 10.861 4.6732.002 1.6484-.096 3.2382-.221 3.5971-.467 1.3401-.4 1.332-11.348 1.4034l-9.853.0644V32.4046h-7.883v7.6879Zm50.06-7.5529c-.239.2381-.156 27.2676.087 28.8381.518 3.3402 1.815 4.6809 5.034 5.2037.807.1309 5.66.2139 12.581.2147l11.269.0016v-6.474h-21.223V32.4046h-3.807c-2.094 0-3.867.0607-3.941.135Zm30.588 17.0616v17.1965l.859-.0035c1.358-.0056 3.553-.5448 4.515-1.1088.524-.3073 1.09-.8746 1.397-1.399 1.064-1.8168 1.104-2.4632 1.108-17.7705l.004-14.1113h-7.883v17.1966Zm26.759-16.8955c-2.357.5132-3.491 1.404-4.269 3.3545-.329.8238-.358 1.9135-.358 13.4398v12.5433l.463 1.1476c.572 1.4159 1.666 2.4467 3.113 2.9335.97.3263 2.173.367 12.544.4238l11.471.063v-6.2875H223.55V32.4046l-.96.016c-.527.0089-1.516.1372-2.195.2851Zm4.772 2.7243v3.044h19.809v6.474h8.085l-.007-2.6807c-.012-4.8437-.531-6.9791-2.027-8.3322-1.554-1.4065-1.587-1.4097-14.389-1.4831l-11.471-.066v3.044Zm41.638 14.07v17.0954h8.085V32.4046h-8.085V49.5Zm18.311-10.5908-8.617 6.5043.055 3.744.054 3.744 9.292 6.8468 9.294 6.8471h6.36c3.602 0 6.28-.0761 6.171-.1752-.105-.0965-5.605-4.0242-12.218-8.7286-6.616-4.7041-12.188-8.7051-12.388-8.891-.342-.3196.25-.7728 10.902-8.367l11.263-8.029h-11.55l-8.618 6.5046ZM21.2231 50.7139v2.9335h11.5211v12.948h1.0693c1.3071 0 3.1871-.4714 4.2715-1.0709.4707-.2603 1.0478-.8357 1.3837-1.3799.9438-1.5291 1.1435-3.3042 1.1514-10.2443l.007-6.12h-19.404v2.9336Zm223.7529 9.4376v6.504l1.675-.1184c2.054-.1451 3.78-.7617 4.696-1.6786 1.176-1.1778 1.534-2.7551 1.661-7.3166l.109-3.8945h-8.141v6.5041Z"
                    fill="currentColor"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h404v100H0z" />
                </clipPath>
                <clipPath id="b">
                  <path fill="#fff" d="M0 32h404.25v35H0z" />
                </clipPath>
              </defs>
            </svg>

            <svg
              height="50"
              viewBox="0 0 400 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#a2)">
                <g clipPath="url(#b2)">
                  <path
                    d="M0 50v23h46V27H0v23Zm223.655-17.599c-7.241 2.69-12.587 10.153-12.633 17.637-.03 4.864 3.786 11.986 7.879 14.706 7.156 4.756 13.782 5.043 23.349 1.011l4.75-2.001V48h-6.5c-6.222 0-6.5.104-6.5 2.437 0 2.018.558 2.49 3.25 2.75 2.988.288 3.25.595 3.25 3.813 0 3.344-.212 3.552-4.744 4.671C226.066 64.063 219 59.066 219 49.823c0-4.379.436-5.459 3.4-8.423 2.871-2.871 4.108-3.4 7.953-3.4 2.504 0 5.686.516 7.07 1.147 2.752 1.254 5.577-.136 5.577-2.744 0-3.775-12.816-6.427-19.345-4.002Zm40.97.068c-4.939 1.761-10.263 6.904-11.722 11.325-.624 1.892-.925 5.623-.669 8.292 1.802 18.748 28.037 22.736 35.886 5.455 4.791-10.547-1.025-22.27-12.62-25.437-5.028-1.374-6.098-1.338-10.875.365Zm43.218-.538c-12.628 4.023-17.831 17.388-10.978 28.195 3.611 5.693 8.67 8.269 16.323 8.31 4.731.026 6.404-.473 9.952-2.967 5.954-4.184 8.327-8.643 8.327-15.648 0-4.711-.516-6.426-2.984-9.92-4.62-6.541-13.89-10.12-20.64-7.97Zm72.657.472c-4.667 2.06-6.955 5.241-6.955 9.672 0 5.288 2.722 7.83 11.699 10.925 7.464 2.574 9.213 4.54 6.716 7.548-1.79 2.158-8.871 1.804-12.886-.644l-3.426-2.089-1.746 2.315c-2.135 2.83-1.847 3.347 3.332 5.989 7.843 4.002 18.407 2.411 21.313-3.21 3.827-7.401.521-12.764-9.966-16.165-7.879-2.556-10.015-4.739-7.296-7.458 2.152-2.152 8.704-2.178 11.956-.048 2.116 1.387 2.416 1.318 4.118-.939 1.783-2.364 1.783-2.475-.011-3.801-1.999-1.478-9.117-3.522-12.041-3.459-.994.022-3.157.635-4.807 1.364ZM36 32.738C36 33.718 6.742 63 5.763 63c-.936 0-1.028-29.401-.096-30.333.916-.917 30.333-.848 30.333.071ZM58 50v18h30v-6H65V52h17.133l-.317-2.75c-.313-2.725-.391-2.753-8.566-3.04L65 45.919V39h22v-7H58v18Zm34-17.161c0 .461 3.553 8.448 7.895 17.75C107.78 67.48 107.793 67.5 111.103 67.5c3.306 0 3.333-.04 11.038-16.5 4.249-9.075 7.755-17.09 7.792-17.81.046-.907-1.058-1.215-3.583-1l-3.649.31-5.467 12.75c-3.007 7.013-5.752 12.743-6.101 12.734-.348-.009-2.843-5.297-5.544-11.75-2.701-6.454-5.343-12.296-5.872-12.984C98.651 31.865 92 31.51 92 32.839Zm43.453.422c-.277.724-.38 8.724-.229 17.777L135.5 67.5l15.25.276 15.25.276v-5.989l-11.75-.281-11.75-.282v-9l8.25-.29 8.25-.291V46h-17v-6.934l11.25-.283 11.25-.283v-6l-14.271-.278c-11.075-.215-14.384.017-14.776 1.039ZM173 50v18h6.909l.295-6.637.296-6.636 5.363.003 5.363.003 3.684 6.384c3.374 5.847 3.995 6.409 7.387 6.693 2.037.171 3.703-.142 3.703-.696 0-.554-1.621-3.772-3.602-7.153l-3.602-6.145 3.352-2.799c2.909-2.428 3.352-3.404 3.352-7.385 0-8.735-5.549-11.566-22.75-11.608L173 32v18Zm163.998-.363-.001 17.863 11.251-.519c12.898-.595 15.586-1.775 18.915-8.301 2.771-5.431 2.275-14.852-1.026-19.488-3.679-5.167-7.38-6.539-18.887-7.005L337 31.773l-.002 17.864ZM41 52.5V68H25.5c-8.525 0-15.5-.169-15.5-.377 0-.397 30.32-30.574 30.75-30.605.138-.01.25 6.957.25 15.482Zm233.92-13.915c8.387 3.356 10.459 13.882 4.003 20.338-10.248 10.248-25.802-3.883-17.638-16.025 1.834-2.728 5.17-4.792 9.445-5.842.126-.031 2.012.657 4.19 1.529Zm45.742 2.567c6.702 6.296 3.8 17.89-5.223 20.868-4.393 1.45-9.715-.784-12.413-5.21-7.432-12.189 7.354-25.317 17.636-15.658Zm-123.064-.686c1.767 2.416 1.764 3.657-.016 6.093-1.195 1.635-2.651 1.941-9.25 1.941H180.5l-.317-3.855c-.54-6.579-.109-6.91 8.426-6.479 6.04.305 7.874.774 8.989 2.3Zm161.642 1.477c2.243 2.51 2.76 4.037 2.76 8.15 0 4.26-.462 5.523-2.923 7.984-2.589 2.589-3.617 2.923-9 2.923H344V37.722l6.24.566c5.348.485 6.635 1.007 9 3.655Z"
                    fill="currentColor"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="a2">
                  <path fill="#fff" d="M0 0h400v100H0z" />
                </clipPath>
                <clipPath id="b2">
                  <path fill="#fff" d="M0 27h401v46H0z" />
                </clipPath>
              </defs>
            </svg>

            <svg
              height="50"
              viewBox="0 0 284 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#a3)">
                <path
                  d="M131.495 51.0407 120.21 33.6349h-6.944v36.8096h6.409V44.1571l11.608 17.2409h.212l11.701-17.3509v26.3974h6.52V33.6349h-6.945l-11.276 17.4058Zm55.751 3.7577h18.59v-5.7836h-18.59v-9.5692h20.981V33.662h-27.501v36.8098h27.761v-5.7836h-21.241v-9.8898ZM64.6997 33.809 48.5571 70.472h6.603l3.7678-8.7899h17.3524l3.6939 8.7899h6.8153L70.6469 33.809h-5.9472ZM61.292 56.0543l6.2889-14.5644 6.3445 14.5644H61.292Zm189.62-6.9293c-7.101-1.6865-8.792-2.9422-8.792-5.7836v-.1192c0-2.4198 2.226-4.363 6.041-4.363 3.389 0 6.722 1.3107 10.064 3.7856l3.491-4.8854c-3.792-3.069-8.563-4.6941-13.455-4.5829-7.387 0-12.661 4.3629-12.661 10.6781v.1009c0 6.7827 4.451 9.0923 12.348 10.9989 6.888 1.5765 8.367 2.9972 8.367 5.6277v.055c0 2.7499-2.54 4.5829-6.566 4.5829-4.619 0-8.155-1.7323-11.71-4.7845l-3.916 4.5829c4.233 3.8146 9.752 5.9144 15.468 5.8845 7.786 0 13.242-4.0972 13.242-10.999v-.11c0-6.1045-4.081-8.8907-11.921-10.7789M17.6478 33.662H8.6346v6.627h9.0132v17.5065c0 4.8947-2.3825 7.2043-5.8826 7.2043-3.12135 0-5.30079-1.5764-7.47098-4.3078L0 65.0548c1.32618 1.8896 3.10528 3.4219 5.17692 4.4587 2.07163 1.0369 4.37067 1.5458 6.68988 1.4808 3.694 0 6.8339-1.0998 9.0133-3.2539 2.1793-2.1539 3.4353-5.4261 3.4353-9.789V33.662h-6.6676ZM276.871 16c-1.403 0-2.776.4132-3.944 1.1872-1.168.7741-2.078 1.8744-2.616 3.1618-.537 1.2874-.679 2.7042-.405 4.0712.273 1.367.949 2.623 1.941 3.6091.992.9861 2.256 1.6581 3.633 1.9311 1.377.273 2.805.1347 4.102-.3973 1.299-.5321 2.407-1.4341 3.19-2.592.781-1.1579 1.199-2.5198 1.2-3.9134-.001-1.8687-.751-3.6601-2.081-4.9814-1.332-1.3213-3.136-2.0647-5.02-2.0671V16Zm0 11.3014c-.846 0-1.672-.2489-2.375-.7152-.703-.4663-1.252-1.1291-1.575-1.9045-.324-.7755-.409-1.6288-.243-2.452.165-.8232.572-1.5793 1.169-2.1728.599-.5935 1.361-.9977 2.191-1.1615.829-.1637 1.688-.0797 2.469.2415.781.3212 1.449.8652 1.919 1.563.471.6979.722 1.5184.722 2.3578 0 1.1255-.452 2.2049-1.254 3.0007-.802.7959-1.889 1.243-3.023 1.243Z"
                  fill="currentColor"
                />
              </g>
              <defs>
                <clipPath id="a3">
                  <path fill="#fff" d="M0 16h284v55H0z" />
                </clipPath>
              </defs>
            </svg>

            <svg
              height="50"
              viewBox="0 0 344 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#a4)">
                <g clipPath="url(#b4)">
                  <path
                    d="M341.711 38.7974c0 .4415-.416.6102-.824.6102h-.377v-1.2063h.445c.416 0 .753.0731.753.5961m.7 2.196-.815-1.33c.202-.0676.375-.2018.491-.3806.116-.1787.168-.3915.147-.6035 0-.6805-.374-.8435-1.153-.8435h-1.088v3.1576h.52v-1.2147h.568l.684 1.2232.646-.0085Zm1.257-1.569c-.027.5006-.2.9823-.498 1.3855-.297.4033-.707.7104-1.177.8835-.471.173-.981.2044-1.47.0902-.488-.1142-.932-.3689-1.276-.7327-.345-.3638-.576-.8207-.664-1.3142-.088-.4935-.029-1.002.169-1.4625.197-.4606.526-.853.945-1.1288.418-.2759.908-.4229 1.41-.4231.346.0069.688.0825 1.004.2225.317.14.603.3415.842.5929.238.2514.424.5477.547.8716.123.3238.18.6689.168 1.0151m.498 0c-.007-.6035-.192-1.1917-.532-1.6903-.34-.4986-.82-.8855-1.38-1.1119-.559-.2264-1.173-.2821-1.765-.1603-.591.1218-1.133.4158-1.557.845-.425.4291-.713.9742-.828 1.5667-.115.5925-.053 1.2059.18 1.763.232.557.624 1.0328 1.127 1.3675.502.3347 1.092.5133 1.696.5133.814-.0089 1.592-.3386 2.165-.9177s.894-1.3608.894-2.1753ZM60.4511 67.2613V61.126H46.5608v-5.528h12.4704v-5.947H46.5608v-5.1794h13.4629v-5.9554H38.3728V67.267l22.0783-.0057ZM283.4 61.7699h2.173c3.889 0 7.21-2.4013 7.21-9.1525 0-4.4229-1.716-8.6941-6.788-8.6941H283.4v17.8466Zm-8.245-23.2565h11.63c9.611 0 14.683 6.0257 14.683 14.1462 0 6.4447-2.862 14.6074-15.406 14.6074h-10.907V38.5134ZM245.952 54.94l2.666-8.1121h.073l2.499 8.1121h-5.238Zm9.032 12.327h8.848l-9.841-28.7508h-8.843l-9.766 28.7508h6.521l2.05-6.2394h9.11l1.921 6.2394Zm-48.538-5.2609-7.387-11.1517v16.2073h-7.715V38.6821h8.199s-3.225-5.2103-10.485-10.4402c-7.26-5.23-12.589-7.2629-14.903-5.7614s.338 7.0689 1.355 9.5376c1.018 2.4688 2.565 6.2198 3.242 6.8749.678.6552 1.792.9195 2.472 1.4509.681.5314 1.687 1.5015 1.687 2.2269 0 .7255-2.904 1.3075-3.29 1.988-.385.6805-.585 1.6871.045 4.7435.63 3.0565 1.066 4.4989 1.552 4.8898.487.3908 1.21.4358 2.031.582.821.1462 1.937.3374 2.227.8211.289.4836-.192 1.687-.282 2.7133-.09 1.0264.194 2.9046.535 4.6452.34 1.7405.86 4.78 1.512 5.2805.653.5005 1.381.3599 1.707.6861.121.1515.207.328.251.5167.044.1887.046.3849.005.5743-.039.2531.253 2.2494.939 3.7425.686 1.4931 1.968 4.2459 3.655 4.2459 1.688 0 3.397-5.1119 4.415-8.3061 1.018-3.1943 2.303-6.3547 4.519-6.3547 2.215 0 1.124 2.7527 3.703 2.7527 2.578 0 1.49-2.7527 3.703-2.7527s3.503 3.1604 4.521 6.3547c1.018 3.1942 2.705 8.3061 4.412 8.3061 1.707 0 2.978-2.7612 3.655-4.2459.678-1.4846.982-3.4894.945-3.7425-.041-.1892-.04-.3853.004-.574.043-.1887.129-.3653.249-.517.326-.3262 1.055-.1799 1.707-.6861.652-.5061 1.175-3.5372 1.516-5.2805.34-1.7434.627-3.6301.531-4.6452-.096-1.015-.582-2.2269-.281-2.7133.301-.4865 1.406-.6777 2.23-.8211.823-.1434 1.549-.194 2.033-.582.483-.3881.919-1.839 1.549-4.8898.63-3.0508.433-4.0659.048-4.7435-.386-.6776-3.293-1.2597-3.293-1.988 0-.7282 1.018-1.687 1.687-2.2269s1.791-.7986 2.469-1.4509c.678-.6523 2.227-4.4061 3.242-6.8749 1.015-2.4687 3.695-8.0361 1.361-9.5376-2.334-1.5015-7.651.5314-14.903 5.7614-7.251 5.2299-10.482 10.4402-10.482 10.4402h8.196v28.3796h-7.715V50.8544l-7.353 11.1517h-.02Zm-58.91 5.2609h8.238V55.7892h8.155V67.267h8.235V38.5134h-8.235v10.8677h-8.155V38.5134h-8.238V67.267Zm-14.121 0v-6.0651h-7.817c-3.967 0-5.986-2.3619-5.986-8.5788 0-5.9864 2.134-7.9687 5.221-7.9687h8.582v-6.1382h-9.15c-6.748 0-13.387 4.4202-13.387 14.6411 0 9.9904 6.827 14.1097 12.203 14.1097h10.334Zm-58.7867 0h6.3322V50.9388h.0731L92.7898 67.267h6.186V38.5134h-6.3491v15.2147h-.0759L82.2933 38.5134h-7.665V67.267Zm261.0827 0v-6.141h-13.885v-5.528h12.473v-5.947h-12.473v-5.1794h13.463v-5.9554h-21.651V67.267h22.073ZM12.8865 62.0567H8.2358v-6.3688h4.6507c2.2888 0 3.9675.6102 3.9675 3.2027 0 2.2494-1.9683 3.1661-3.9675 3.1661m-.4555-18.2262c1.9683 0 4.1559.6861 4.1559 3.0509 0 2.4378-2.0583 3.0929-4.1559 3.0929H8.2358v-6.1438h4.1952Zm6.6331 8.6942c3.0142-.9532 5.7586-3.0143 5.7586-6.4447 0-4.7688-4.2712-7.5132-10.7636-7.5132H0v28.7508h15.0601c8.3904 0 10.488-4.0406 10.488-7.7381 0-3.8916-2.8596-6.2928-6.484-7.0548"
                    fill="currentColor"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="a4">
                  <path fill="#fff" d="M0 0h344v100H0z" />
                </clipPath>
                <clipPath id="b4">
                  <path fill="#fff" d="M0 22h344.165v56H0z" />
                </clipPath>
              </defs>
            </svg>

            <svg
              height="50"
              viewBox="0 0 145 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.4293 72.6897c-3.0758 0-6.1516-1.0259-8.495-3.2242-1.3021-1.0265-2.37771-2.3117-3.15913-3.7746-.78141-1.4629-1.2517-3.0717-1.38127-4.7254 0-.2931 0-.5862-.14646-.8793V36.1983s6.00506 0 6.00506 5.4224v6.8879l.8788-.4396c.1464 0 .1464-.1466.1464-.1466.1465 0 .293-.1465.293-.1465 1.8685-1.0807 3.9935-1.6375 6.1515-1.6121h.5858c2.7829.1465 5.1263.8793 7.3233 2.4914C28.707 51 30.4646 53.931 31.0505 57.4483c.4394 3.0776 0 6.0086-1.4647 8.5-2.1969 3.6638-5.1262 5.862-9.0808 6.5948-1.1717 0-2.197.1466-3.0757.1466Zm.2929-20.9569c-.4394 0-.8788 0-1.3182.1465-3.8081.4397-6.1515 3.5173-6.1515 7.3276v.5862c0 2.1983.8788 3.9569 2.4899 5.2759 1.3182 1.1724 3.2222 1.9051 4.9798 1.9051 1.3182 0 2.7828-.4396 3.9545-1.0258 2.7829-1.6121 3.9546-4.25 3.5152-7.6207-.4394-3.2242-3.0758-6.5948-7.4697-6.5948Zm83.4848 20.9569c-3.5151 0-6.8838-1.319-9.5202-3.9569-2.4074-2.3074-3.8252-5.46-3.9545-8.7931-.1465-3.6638 1.0252-7.1811 3.6616-9.819 2.6364-2.6379 6.005-4.25 9.8131-4.25 7.323 0 13.475 6.0086 13.475 13.3362 0 3.5172-1.318 6.7414-3.808 9.3793-2.35 2.4533-5.544 3.9203-8.935 4.1035h-.732Zm.146-20.9569c-.439 0-.878 0-1.4642.1465-1.7973.2847-3.4289 1.2161-4.5885 2.6192-1.1596 1.4032-1.7675 3.1817-1.7094 5.0015v.5862c.1464 4.1035 3.3687 7.181 7.4701 7.181 1.318 0 2.782-.4396 3.954-1.0258 2.783-1.6121 3.808-4.25 3.369-7.6207-.147-3.6638-2.929-6.8879-7.031-6.8879ZM58.8787 36.1983V72.25h6.298V41.6207c-.1464-5.2759-6.298-5.4224-6.298-5.4224Zm9.0809 0V72.25h6.2979V41.6207c0-5.7155-6.2979-5.4224-6.2979-5.4224Z"
                fill="currentColor"
              />
              <path
                d="M77.0404 72.25V58.9138c0-2.0517.1465-4.25 1.0252-6.4483 1.3182-3.0776 3.6617-4.8362 6.8839-5.862 2.6363-.7328 4.9798-.5862 4.9798-.5862v5.7155s-1.4647 0-2.9293.4396c-2.0505.5862-3.3687 1.9052-3.6616 4.1035-.1465.8793-.293 2.0517-.293 3.2241v12.75h-6.005Zm39.9846 3.5173c2.637 0 3.369 1.3189 3.955 1.9051.879.7328 2.05 1.1724 3.076 1.1724 3.368 0 6.005-3.0775 6.005-6.0086v-1.319c-1.465.8794-3.076 1.1725-4.687 1.1725-6.005 0-10.692-4.9828-10.692-11.138V46.3104h6.005v14.9482c0 2.7845 2.197 5.2759 4.687 5.2759 2.783 0 4.687-2.3448 4.687-5.2759v-9.5258c0-5.4224 6.005-5.4224 6.005-5.4224v26.3793c0 6.1551-4.541 11.8707-12.01 11.8707-4.541 0-8.642-2.638-10.399-6.888-.586-1.1724-.733-2.0517-.733-2.0517s1.904.1466 4.101.1466Zm-72.6462-8.5c-2.4899 0-4.5404-1.1725-5.8586-2.9311l19.0404-6.7414c-.8788-4.3965-2.6364-7.181-5.2727-9.0862-1.4791-1.0259-3.1467-1.7484-4.9064-2.1258-1.7598-.3773-3.5768-.4019-5.3462-.0724-.8787.1465-1.4646.2931-2.3434.5862-2.7239 1.0105-5.0358 2.8968-6.5731 5.3634-1.5373 2.4665-2.2133 5.3737-1.9218 8.2659.1374 1.7504.6228 3.4557 1.4276 5.016.8048 1.5603 1.9129 2.944 3.2592 4.0702 2.6364 2.1983 5.8586 3.2241 9.2273 3.2241 1.4646 0 2.7828-.2931 4.2475-.8793 5.4192-1.9052 7.9091-6.0086 8.4949-9.819h-3.5151c-2.197 0-3.0758 1.4656-3.6616 2.0518-.7791.9219-1.7414 1.6716-2.8256 2.2014s-2.2668.8282-3.4724.8762Zm-2.4899-15.0949c.1464 0 .1464 0 .2929-.1465h.4394c.5859-.1466 1.1717-.2931 1.904-.2931 1.3182 0 2.6364.4396 3.8081 1.0258.5859.2931 1.0253.7328 1.4647 1.1724v.4397l.5858.5862-13.4747 4.6897v-.7328c.1464-3.2241 2.0505-5.7155 4.9798-6.7414ZM110.727 8.06035c-1.025 0-1.904.87932-1.904 1.90518 0 1.02587 1.025 2.05177 2.197 1.75857.44 1.6121 1.318 3.0776 2.637 4.1035l.585.2931.586-.4397c1.026-.8793 2.051-2.4913 2.49-4.1034h.44c1.025 0 1.904-.8793 1.904-1.90518 0-1.02586-1.026-1.75862-2.051-1.75862-1.172 0-1.904.87931-1.904 1.90518 0 1.31892-.732 3.07762-1.611 4.25002-.879-1.0259-1.465-2.638-1.611-4.25002.146-.87932-.732-1.75863-1.758-1.75863Zm24.167 17.00005c-3.662-9.0863-8.934-11.7242-11.131-12.6035.146-.5862.146-1.0259.146-1.7586 0-5.27588-4.394-9.52588-9.667-9.52588-5.126 0-9.227 4.10345-9.959 9.37928-1.025 12.75 7.323 19.7845 11.424 23.0087 2.343 1.7586 3.515 3.0775 2.197 5.2758-.879 1.1724-1.758 2.9311-2.636 3.2242-2.344.4396-3.076 1.9051-3.076 1.9051h2.05c2.637 0 3.369-.1465 6.005-4.3965 2.49-4.25-1.464-6.5949-3.075-7.9138-4.101-3.0776-11.717-9.3793-10.692-20.8104v-.1465c.439-4.39657 3.661-7.6207 7.909-7.6207 1.498-.01246 2.967.42115 4.219 1.24571 1.251.82456 2.23 2.00285 2.81 3.38512.581 1.38228.738 2.90617.452 4.37787-.287 1.4718-1.005 2.8251-2.062 3.8878-1.318 1.4656-3.222 2.1983-5.273 2.1983-.732 0-1.318-.1465-1.904-.2931-2.05-.5862-2.929.8793-2.929.8793l-.146.1466.146.1465c1.318.8793 3.222 1.319 4.833 1.319 2.637 0 4.98-.8793 6.738-2.7845.879-.8793 1.611-1.9052 2.05-2.931 1.758.7327 6.445 3.0776 9.813 11.2845.879 2.0517 1.611 4.1034 2.344 5.862-2.637 0-11.864-.2931-16.404-7.4741-1.172-1.9052-3.076-1.4655-3.076-1.4655C120.687 34.1466 134.015 33.8535 136.505 34c1.172 2.931 2.197 5.2759 2.636 6.5948-1.025 0-3.075-.4396-5.419-2.4913-1.001-.9323-2.176-1.658-3.458-2.1357-1.281-.4778-2.645-.6983-4.011-.6488l-5.859 9.2327s2.783 0 3.954-1.7586l3.223-5.1293c1.611.1466 3.222.8793 4.833 2.1983 3.076 2.4914 4.98 2.7845 6.884 2.7845 1.757.1465 2.783-.4397 2.783-.4397S138.556 34 134.894 25.0604Z"
                fill="currentColor"
              />
            </svg>
          </Marquee>
        </Box>
      </Box>

      <Box as="section" paddingX="md" marginY="xxl">
        <VisuallyHidden as="h2">Latest posts</VisuallyHidden>
        <Box as="ul" marginX="auto" maxWidth="md">
          {posts.map((post, index) => {
            return (
              <li key={post._id}>
                {index > 0 ? <Spacer height="lg" /> : null}
                <Entry
                  slug={post.slug}
                  thumbnail={post.thumbnail}
                  category={post.category}
                  heading={post.title}
                  description={post.description}
                />
              </li>
            );
          })}
        </Box>
      </Box>
    </>
  );
}
