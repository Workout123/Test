class ReviewsController < ApplicationController
  layout "items"
  def index
    @item = Item.find(params[:item_id])
    @reviews = @item.reviews
  end

  def show
    @item = Item.find(params[:item_id])
    @review = @item.reviews.find(params[:id])
  end

  def new
    @item = Item.find(params[:item_id])
    @review = @item.reviews.build
  end

  def create
    @item = Item.find(params[:item_id])
    @review = @item.reviews.build(params[:review])
    if @review.save
      redirect_to item_reviews_path(@item)
    else
      reder :action => "new"
    end
  end

  def edit
    @item = Item.find(params[:item_id])
    @review = @item.reviews.find(params[:id])
  end

  def update
    @item = Item.find(params[:item_id])
    @review = @item.reviews.find(params[:id])

    if @review.update_attributes(params[:review])
      redirect_to item_review_url(@item, @review)
    else
      render :action => "edit"
    end
  end

  def destroy
    @item = Item.find(params[:item_id])
    @review = @item.reviews.find(params[:id])
    @review.destroy

    redirect_to :action => 'index'
  end

end
