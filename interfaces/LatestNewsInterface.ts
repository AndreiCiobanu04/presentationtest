
type Slug = {
  current: string;
};

export interface LatestNewsInterface {
  description: string;
  slug: Slug;
  className: string;
  _updatedAt: string;
  _id?: string;
}
