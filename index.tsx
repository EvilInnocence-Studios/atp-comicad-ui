import { IModule } from "@core/lib/module";
import { ComponentRegistry } from "@theming/lib/layout/componentRegistry";
import { BannerAd, BillboardAd, ButtonAd, ComicAd, HalfBannerAd, HalfSkyscraperAd, LeaderboardAd, SkyscraperAd, SlimLeaderboardAd, SquareAd, SquareButtonAd, WideSkyscraperAd } from "./components/ComicAd";

export const module: IModule = {
    name: "comicad",
}

// Ads
ComponentRegistry.register(ComicAd);
ComponentRegistry.register(BannerAd);
ComponentRegistry.register(LeaderboardAd);
ComponentRegistry.register(SquareAd);
ComponentRegistry.register(HalfBannerAd);
ComponentRegistry.register(SkyscraperAd);
ComponentRegistry.register(ButtonAd);
ComponentRegistry.register(WideSkyscraperAd);
ComponentRegistry.register(HalfSkyscraperAd);
ComponentRegistry.register(BillboardAd);
ComponentRegistry.register(SlimLeaderboardAd);
ComponentRegistry.register(SquareButtonAd);
