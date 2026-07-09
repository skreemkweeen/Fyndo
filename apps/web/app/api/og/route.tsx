import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Fyndo Exclusive Product";
    const priceStr = searchParams.get("price");
    const price = priceStr
      ? `$${(parseInt(priceStr, 10) / 100).toFixed(2)}`
      : "";

    return new ImageResponse(
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          padding: "40px",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "20px",
            padding: "60px",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 900,
              color: "white",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            {title}
          </h1>
          {price && (
            <p
              style={{
                fontSize: "36px",
                color: "#9ca3af",
                fontWeight: 600,
              }}
            >
              {price}
            </p>
          )}
          <div
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "20px",
                backgroundColor: "white",
              }}
            />
            <span style={{ color: "white", fontSize: "24px", fontWeight: 500 }}>
              Fyndo
            </span>
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    return new Response(`Failed to generate image`, { status: 500 });
  }
}
