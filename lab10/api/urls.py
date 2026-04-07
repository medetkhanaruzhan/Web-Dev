from django.urls import path
from api import views

# URL Configuration examples for all DRF view levels

urlpatterns = [
    # Level 5 - Generics (Final Active Version)
    path('products/', views.ProductListAPIView.as_view()),
    path('products/<int:product_id>/', views.ProductDetailAPIView.as_view()),
    path('categories/', views.CategoryListAPIView.as_view()),
    path('categories/<int:pk>/', views.CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', views.CategoryProductsAPIView.as_view()),

    # --- Examples of other levels (commented out) ---

    # Level 2 - FBV
    # from api.views import fbv
    # path('products/', fbv.product_list),
    # path('products/<int:product_id>/', fbv.product_detail),

    # Level 3 - CBV
    # from api.views import cbv
    # path('products/', cbv.ProductListAPIView.as_view()),
    # path('products/<int:product_id>/', cbv.ProductDetailAPIView.as_view()),

    # Level 4 - Mixins
    # from api.views import mixins
    # path('products/', mixins.ProductListAPIView.as_view()),
    # path('products/<int:product_id>/', mixins.ProductDetailAPIView.as_view()),
]