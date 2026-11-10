export type Language = 'id' | 'en';

export interface ProductItem {
  id: string;
  nameId: string;
  nameEn: string;
  scientificName: string;
  category: 'frozen_fish' | 'fresh_fish' | 'pelagic_large' | 'pelagic_small' | 'demersal' | 'agri';
  subCategory?: 'frozen' | 'fresh' | 'special' | 'livestock';
  categoryLabelId: string;
  categoryLabelEn: string;
  descriptionId: string;
  descriptionEn: string;
  formOptions: string[];
  sizeRange: string;
  packaging: string;
  minOrder: string;
  nutrition: string;
  tags: string[];
  imagePlaceholderGradient: string;
  // Frozen Fish Technical Specifications
  isFrozen?: boolean;
  freezingMethod?: string; // e.g. Air Blast Freezer (ABF), Contact Plate Freezer (CPF), IQF
  freezingTemp?: string; // e.g. -18°C s/d -25°C
  glazingLevel?: string; // e.g. 0% Naked, 5-10% Protective Glaze
  shelfLife?: string; // e.g. 12-24 Bulan pada suhu -18°C
  targetMarket?: string; // e.g. Pabrik Pengolahan, Restoran, Pasar Grosir
  pricePerKgFresh?: number; // Estimasi referensi harga segar per kg (Rp)
  pricePerKgFrozen?: number; // Estimasi referensi harga beku per kg (Rp)
  imageUrl?: string; // Foto asli/kualitas tinggi komoditas ikan
  laymanSummary?: string; // Penjelasan bahasa awam seputar rasa, tekstur, & kegunaan
}

export interface WorkflowStep {
  step: number;
  titleId: string;
  titleEn: string;
  subtitleId: string;
  subtitleEn: string;
  descriptionId: string;
  descriptionEn: string;
  iconName: string;
  tempControl: string;
}

export interface BusinessCategoryItem {
  id: number;
  titleId: string;
  titleEn: string;
  descId: string;
  descEn: string;
  icon: string;
  scope: string;
}

export interface FAQItem {
  questionId: string;
  questionEn: string;
  answerId: string;
  answerEn: string;
  category: string;
}
