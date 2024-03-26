type BannerProps = {
    bannerText: string
}

export function Banner(props: BannerProps) {
    return (
      <div className="banner">
        <h1>{props.bannerText}</h1>
      </div>
    );
  }