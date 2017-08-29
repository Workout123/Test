class AccountsController < ApplicationController
  def index
    @accounts = Account.all
  end

  def new
    @account = Account.new
  end

  def create
    @account_details = Account.new(params[:accounts])
    if @account_details.save
      redirect_to items_path
    else
      render :action => "new"
    end
  end

end
