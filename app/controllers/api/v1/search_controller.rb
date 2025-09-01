class Api::V1::SearchController < ApplicationController
  def posts
    posts_per_page = 5
    @posts = Post.where("title LIKE ? or body LIKE ?", "%#{params[:q]}%", "%#{params[:q]}%").order(created_at: :desc)
         total_post_count = @posts.count
    posts_with_images = paginate_posts(@posts, posts_per_page)

    render json: { posts: posts_with_images,
    total_post_count: total_post_count,
    per_page: posts_per_page,
    status: :ok,
    location: "api_v1_posts_with_images" }
  end
end
