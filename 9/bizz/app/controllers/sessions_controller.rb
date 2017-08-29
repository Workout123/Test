class SessionsController < ApplicationController
  def index
  end

  def login
    @user = params[:account][:username]
    @pwd = params[:account][:password]
    @account = Account.find(:first, :conditions => ["username = ?", @user])
    if @account
      if(@account.password != @pwd)
        flash[:notice] = "Wrong credentials"
        redirect_to :action => "index"
      else
        session[:username] = @user
        redirect_to items_path
      end
    else
      flash[:notice] = "User not found"
      redirect_to :action  => "index"
    end
  end

  def destroy
    session[:username] = nil
    flash[:notice] = "You have been logged out"
    redirect_to :action => "index"
  end

end
