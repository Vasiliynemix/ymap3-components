import { Reactify } from "@yandex/ymaps3-types/reactify";

// Новые версии пакетов и сохранение структуры
export enum Package {
  CartesianProjection = "@yandex/ymaps3-cartesian-projection@0.0.6",
  Clusterer = "@yandex/ymaps3-clusterer@0.0.12",
  Hint = "@yandex/ymaps3-default-ui-theme",       // Hint теперь внутри DefaultUITheme
  Controls = "@yandex/ymaps3-default-ui-theme",   // Controls внутри DefaultUITheme
  Markers = "@yandex/ymaps3-default-ui-theme",    // Markers внутри DefaultUITheme
}

// Типы YMaps
export type YMapsV3 = typeof import("@yandex/ymaps3-types/index");

export interface YMapDefaultModules {
  reactify: Reactify;
  ymaps: YMapsV3;
}

export interface YMapsComponentsState extends YMapDefaultModules {}